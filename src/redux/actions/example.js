import {
  EXAMPLE
} from '../constants';

function example(val){
  return {
    type: EXAMPLE,
    payload: {
      title: val
    }
  };
}

export const changeTitle = val => (dispatch) => {
  dispatch(example(val));
};
