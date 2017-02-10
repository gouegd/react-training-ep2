import { handleActions } from 'redux-actions';

function categorySet(state, action) {
  return {
    ...state,
    category: action.payload,
  };
}

function imagesReceived(state, action) {
  const { payload } = action;
  const { data } = payload;

  return {
    ...state,
    items: data.map(d => ({name: d.slug, image: d.images.fixed_height.url})),
  };
}

function imagesReceivedFailed(state, action) {
  return state; //TODO
}
export default handleActions({
  IMAGES_CATEGORY_SET: categorySet,
  IMAGES_RECEIVED: { next: imagesReceived, catch: imagesReceivedFailed },
}, { category: 'cats' });
