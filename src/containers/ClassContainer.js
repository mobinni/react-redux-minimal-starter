import React, {Component} from 'react';
import {connect} from 'react-redux';

import {increment, decrement} from '../../library/modules/counter/actions';

class ClassContainer extends Component {
    onClick = (toIncrement) => () => {
        const {dispatch} = this.props;
        if (toIncrement) {
            return dispatch(increment());
        }
        dispatch(decrement());
    };

    render() {
        return (
            <div>
                I'm a class component 2 {this.props.counter}

                <button onClick={this.onClick(true)}>Increment</button>
                <button onClick={this.onClick()}>Decrement</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

export default connect(mapStateToProps)(ClassContainer);