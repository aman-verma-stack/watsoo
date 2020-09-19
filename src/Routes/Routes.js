import React, { Component } from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom'
import TripSummmary from '../Components/ListPage/listpage'

class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route path='/' exact component={TripSummmary}></Route>
                <Route path='/Trip/' exact component={TripSummmary}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        )
    }
}


export default Routes;