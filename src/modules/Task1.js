import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from 'actions';

/**
 * Task1 component.
 *
 * You can modify this file however you wish.
 */
class Task1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { count } = this.props;
        return (
            <div class="countdown">{count}</div>
        );
    }
}

/**
 * These functions connect the component to the redux store.
 * They are here for your convenience, and you do not have to use them.
 */
function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            app: bindActionCreators(actions, dispatch)
        }
    };
}

const component = connect(mapStateToProps, mapDispatchToProps)(Task1);

component.propTypes = {
    /**
     * A countdown value that must reach 0 before enableTask2 can be called.
     */
    count: PropTypes.number.isRequired,

    /**
     * A function to enable the second task. Call this at the end of your countdown.
     */
    enableTask2: PropTypes.func.isRequired
};

export default component;
