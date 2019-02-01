import React, { Component } from 'react';
import mainLogo from '../img/main.jpg';

class LogIn extends Component {

    state = {
        LogInButtonState: true,
        Password: '',
        Name: ''
    }
    LogInButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            LogInButtonState: false
        })
    }
    UserDataCheck = (e) => {
        e.preventDefault();
        if (this.state.Name === 'admin' && this.state.Password ==='admin') {
        this.props.history.push('/Home')
        }
    }
    SetUserPass = (e) => {
        this.setState({
        Password: e.target.value
        })
    }
    SetUserName = (e) => {
        this.setState({
        Name: e.target.value
        })
    }
    render () {
        if (this.state.LogInButtonState) {
        return (
            <div className="LogInWrapper">
                <div className="mainLogoWrapper">
                    <img className="mainLogo" src={mainLogo}></img>
                    <form onSubmit={this.LogInButtonClick}>
                        <button type="submit" className="journey">Log In</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
        <div className="LogInWrapper">
            <div className="mainLogoWrapper">
                <img className="mainLogo" src={mainLogo}></img>
                <form onSubmit={this.UserDataCheck}>
                    <input placeholder="Login" onChange={this.SetUserName}></input>
                    <input placeholder="Password" onChange={this.SetUserPass}></input>
                    <button type="submit" className="journey">Log In</button>
                </form>
            </div>
        </div>
    )
    }
    }
}

export default LogIn;
