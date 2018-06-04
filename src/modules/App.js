import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Task1 from "./Task1";
import Task2 from "./Task2";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "actions";

/**
 * This is the main App component & Home page.
 *
 * You are not allowed to modify any code in this file except for the commented section.
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bombCounter: 1,
            defused: false,
            enableTask2: false
        }
    }

    componentWillMount() {
        const { actions } = this.props;
        actions.app.login();
    }

    componentDidMount() {
        // do nothing
    }

    componentWillReceiveProps() {
        // do nothing
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUpdate() {
        // do nothing
    }

    componentDidUpdate() {
        const { defused, bombCounter } = this.state;
        if (!defused && bombCounter > 0) {
            this.setState({ bombCounter: bombCounter - 1 });
        }
    }

    doEnableTask2 = () => {
        this.setState({ enableTask2: true });
    };

    buildLinks = () => {
        const { enableTask2 } = this.state;
        return (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/task1'>Task 1</Link>
                {enableTask2 &&
                <Link to='/task2'>Task 2</Link>
                }
            </div>
        )
    };

    /************************************************************************
     * START SECTION. MAKE YOUR CHANGES IN THIS SECTION HERE.
     *
     * You can MODIFY or ADD as many functions as you want here.
     ***********************************************************************/

    buildTask1 = () => {
        return <Task1 count={5} enableTask2={this.doEnableTask2}/>;
    };

    buildTask2 = () => {
        return <Task2/>
    };

    /************************************************************************
     END SECTION.                                                           *
                                                                            *
     YOU CANNOT MODIFY ANY CODE OUTSIDE OF THIS SECTION IN THIS FILE!       *
     ***********************************************************************/

    render() {
        if (!this.state.defused && this.state.bombCounter <= 0) {
            return <h1>BOOM!</h1>;
        }

        return (
            <div>
                <header>
                    <h1>Welcome!</h1>
                    <p>This is the landing page for the React/Redux exercise. Please read the requirements for each task in the project's README.</p>
                    <p>Good luck!</p>
                </header>
                <BrowserRouter>
                    <div>
                        {this.buildLinks()}
                        <Switch>
                            <Route path='/task1' render={this.buildTask1}/>
                            <Route path='/task2' render={this.buildTask2}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(App);

