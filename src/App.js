import React, { Component } from 'react';
import LogIn from './components/LogIn';
import Home from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route exact path ='/' component={LogIn} />
                    <Route path ='/Home' component={Home} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App
