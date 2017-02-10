import { createAction as actionCreatorFactory } from 'redux-actions';

import { getByCategory } from '../api';

const setCategory = actionCreatorFactory('IMAGES_CATEGORY_SET');

const receiveImages = actionCreatorFactory('IMAGES_RECEIVED', category => getByCategory(category));

export { setCategory, receiveImages };
