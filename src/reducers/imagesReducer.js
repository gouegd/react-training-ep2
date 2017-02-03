import { handleActions } from 'redux-actions';

function categorySet(state, action) {
  return {
    ...state,
    category: action.payload,
  };
}

export default handleActions({
  IMAGES_CATEGORY_SET: categorySet,
}, { category: 'cats' });
