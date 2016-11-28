import constants from './constants';

function getName() {
    return {
        type: constants.GET_NAME
    }
}

function setName(name = '') {
    return {
        type: constants.SET_NAME,
        payload: name
    }
}

export default {
    getName,
    setName
}