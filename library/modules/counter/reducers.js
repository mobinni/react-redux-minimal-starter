import constants from './constants';

function counter(state = 0, action) {
    if (action.type === constants.INCREMENT) {
        return ++state
    }
    else if (action.type === constants.DECREMENT) {
        return --state
    }
    return state;
}

export default {
    counter
}