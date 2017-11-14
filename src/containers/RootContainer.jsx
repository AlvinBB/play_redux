import React from 'react';
import { connect } from 'react-redux';

import Root from '../components/Root.jsx';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
})(RootContainer);
