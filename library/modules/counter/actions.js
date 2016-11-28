import constants from './constants';

export function increment() {
    return {
        type: constants.INCREMENT
    }
}

export function decrement() {
    return {
        type: constants.DECREMENT
    }
}

export default {
    increment,
    decrement
}