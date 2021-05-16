import { IMAGES } from '../constants';

const loadImages = () => ({
    type: IMAGES.LOAD,
});

const setImages = images => ({
    type: IMAGES.LOAD.SUCCESS,
    images,
});

const setError = error => ({
    type: IMAGES.LOAD.FAIL,
    error,
});

export {
    loadImages,
    setImages,
    setError,
};