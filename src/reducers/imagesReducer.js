import { IMAGES } from '../constants';

const imagesReducer = (state = [], actions) => {
    if (actions.type === IMAGES.LOAD.SUCCESS) {
        return [...state, ...actions.images];
    }
    return state;
};

export default imagesReducer;