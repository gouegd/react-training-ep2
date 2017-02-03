const setCategory = (category) => ({
  // eventually we should put action types in a file and import them.
  // let's keep this simple for now.
  type: 'IMAGES_CATEGORY_SET',
  payload: new Promise((resolve) => setTimeout(() => resolve(category), 2000))
});

/**
 * Using the redux-action helpers, it would be:
 *
 * import { createAction as actionCreatorFactory } from 'redux-actions';
 * const setCategory = actionCreatorFactory('IMAGES_CATEGORY_SET');
 */

export { setCategory };
