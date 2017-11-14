import { combineReducers } from 'redux';
import { createReducer } from 'redux-immutablejs';
import { fromJS } from 'immutable';
import {
  EXAMPLE
} from '../constants';

// const example = createReducer(fromJS({
//   title: "项目构建成功"
// }), {
//   [EXAMPLE]: (state, action) => {
//     return state.merge({
//       title: action.payload.title
//     });
//   }
// });


const initialState = {
  title: '初始化项目',
};

const example = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE:
      return {
        title: action.payload.title,
      };

    default:
      return state;
  }
};

// export default router;

const rootReducer = combineReducers({
  example
});

export default rootReducer;
