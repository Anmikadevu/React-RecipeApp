import React, { Component } from 'react';
import { Route } from 'react-router';


import { FetchData } from './components/FetchData';


export default class App extends Component {
    displayName = App.name

    render() {
        return (
              <div>


              <Route exact path='/' component={FetchData} />
                <Route exact path='/' component={FetchData} />
              </div>
           
        )
    }
}