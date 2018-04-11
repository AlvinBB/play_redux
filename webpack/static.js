function serveStatic(root, options) {
    if (!root) {
        throw new TypeError('root path required')
    }

    if (typeof root !== 'string') {
        throw new TypeError('root path must be a string')
    }

    // copy options object
    var opts = Object.create(options || null)

    // fall-though
    var fallthrough = opts.fallthrough !== false

    // default redirect
    var redirect = opts.redirect !== false

    // headers listener
    var setHeaders = opts.setHeaders

    if (setHeaders && typeof setHeaders !== 'function') {
        throw new TypeError('option setHeaders must be function')
    }

    // setup options for send
    opts.maxage = opts.maxage || opts.maxAge || 0
    opts.root = resolve(root)

    // construct directory listener
    var onDirectory = redirect
        ? createRedirectDirectoryListener()
        : createNotFoundDirectoryListener()

    return function serveStatic(req, res, next) {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            if (fallthrough) {
                return next()
            }

            // method not allowed
            res.statusCode = 405
            res.setHeader('Allow', 'GET, HEAD')
            res.setHeader('Content-Length', '0')
            res.end()
            return
        }

        var forwardError = !fallthrough
        var originalUrl = parseUrl.original(req)
        var path = parseUrl(req).pathname

        // make sure redirect occurs at mount
        if (path === '/' && originalUrl.pathname.substr(-1) !== '/') {
            path = ''
        }

        // create send stream
        var stream = send(req, path, opts)

        // add directory handler
        stream.on('directory', onDirectory)

        // add headers listener
        if (setHeaders) {
            stream.on('headers', setHeaders)
        }

        // add file listener for fallthrough
        if (fallthrough) {
            stream.on('file', function onFile() {
                // once file is determined, always forward error
                forwardError = true
            })
        }

        // forward errors
        stream.on('error', function error(err) {
            if (forwardError || !(err.statusCode < 500)) {
                next(err)
                return
            }

            next()
        })

        // pipe
        stream.pipe(res)
    }
}