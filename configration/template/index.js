
export function renderFullPage(html, preloadedState) {
    return `
      <!doctype html public="DEV">
      <html>
        <head>
          <title>Redux Universal Example</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
          <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
          <script src="/static/dist/bundle.js"></script>
        </body>
      </html>
      `
}