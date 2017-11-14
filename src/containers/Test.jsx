import React from 'react';
import { connect } from 'react-redux';
import { changeTitle } from '../redux/actions/example';

class RootContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){

  }
  handleClick(){
    const { title, changeTitle } = this.props;
    console.log('title', title)
    if(title == '初始化项目'){
      changeTitle('更换title');
    } else {
      changeTitle('再次更换title');
    }

  }
  render(){
    const { title } = this.props;
    console.log('render', title)
    return <div className="title" onClick={this.handleClick}>
      {title}
    </div>;
  }
}

const mapStateToProps = state => {
  const { example } = state;
  console.log('state', state, example.EXAMPLE)
  return {
    title: example.title
  };
};

export default connect(mapStateToProps, {
  changeTitle
})(RootContainer);

// import { initEnvironment } from '../actions/EnvironmentActions';
// import { initRouter } from '../actions/RouterActions';
// import { initAuth } from '../actions/SessionActions';
// import Root from '../components/Root';
// import SongContainer from '../containers/SongContainer';
// import SongsContainer from '../containers/SongsContainer';
// import UserContainer from '../containers/UserContainer';
//
// import {
//   INDEX_PATH,
//   PLAYLIST_PATH,
//   SONG_PATH,
//   SONGS_PATH,
//   USER_PATH,
// } from '../constants/RouterConstants';
//
// const RootContainer = props => <Root {...props} />;
//
// const mapStateToProps = (state) => {
//   const { router } = state;
//
//   return {
//     paths: [INDEX_PATH, PLAYLIST_PATH, SONG_PATH, SONGS_PATH, USER_PATH],
//     router,
//     routes: {
//       [INDEX_PATH]: SongsContainer,
//       [PLAYLIST_PATH]: SongsContainer,
//       [SONG_PATH]: SongContainer,
//       [SONGS_PATH]: SongsContainer,
//       [USER_PATH]: UserContainer,
//     },
//   };
// };
//
//
// export default connect(mapStateToProps, {
//   initAuth,
//   initEnvironment,
//   initRouter,
// })(RootContainer);
