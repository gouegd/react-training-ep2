import { handleActions } from 'redux-actions';

function categorySet(state, action) {
  // TODO modify this !
  return state;
}

export default handleActions({
  IMAGES_CATEGORY_SET: categorySet,
}, { category: 'cats' });
