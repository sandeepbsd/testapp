import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from 'actions';

/**
 * Task2 component.
 *
 * You can modify this file however you wish.
 */
class Task2 extends Component {

    constructor(props) {
        super(props);
    }

    /**
     * This function needs to display the task properly.
     */
    buildTasks = task => {
        return (
            <div class="task">
                <input type="checkbox"/>
                <span>Task description</span>
            </div>
        )
    };

    buildTodoTable = tasks => {
        return (
            <div class="left">
                <h3>To-Do</h3>
                <div class="table">
                    {tasks.map(this.buildTasks)}
                </div>
                <button>Mark Completed</button>
            </div>
        )
    };

    buildCompletedTable = tasks => {
        return (
            <div class="right">
                <h3>Completed</h3>
                <div class="table">
                    {tasks.map(this.buildTasks)}
                </div>
                <button>Mark To-Do</button>
            </div>
        )
    };

    render() {
        // stubbed data - you should remove these
        const stubbedTodoTasks = [1, 2, 3, 4];
        const stubbedCompletedTasks = [1, 2, 3];

        return (
            <div class="task-table">
                {this.buildTodoTable(stubbedTodoTasks)}
                {this.buildCompletedTable(stubbedCompletedTasks)}
                <button type="submit">Submit</button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Task2);
