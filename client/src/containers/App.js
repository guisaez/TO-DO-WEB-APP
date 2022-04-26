import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/actions'
import {Redirect} from 'react-router-dom'

import DashBoard from './DashBoard'
import LandingContainer from './Landing Container'


class App extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div>
                {this.props.auth.authenticated ? <Redirect to={"/" + this.props.auth.user.login}/> : <></>}
                <Route exact path="/login">
                    <LandingContainer/>
                </Route>
                <Route exact path="/">
                    <LandingContainer/>
                </Route>
                <Route path={"/" + this.props.auth.user.login}>
                    <DashBoard/>
                </Route>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps, actions)(App)