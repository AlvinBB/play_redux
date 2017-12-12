import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Top from './Toop';

const propTypes = {

};

class Root extends Component {
  render() {
    return (
      <div className="title">
        <Top />
      </div>
    );
  }
}

Root.propTypes = propTypes;

export default Root;
