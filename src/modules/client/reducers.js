import constants from './constants';

function client(state = '', action) {
    if (action.type === constants.GET_NAME) {
        return state;
    }
    else if (action.type === constants.SET_NAME) {
        return state = action.payload;
    }
    return state;
}

export default {
    client
}