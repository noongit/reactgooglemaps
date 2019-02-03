import React, { Component } from 'react';
import LogIn from './components/LogIn';
import Home from './components/Home';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path ='/Home' component={Home} />
                    <Route exact path ='/' component={LogIn} />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default App;
