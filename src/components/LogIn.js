import React, { Component } from 'react';
import mainLogo from '../img/main.jpg';
import { connect } from 'react-redux';
import { logIn } from '../actions/logIn'
class LogIn extends Component {
    state = {
        LogInButtonState: false,
        userData: {
            Name: '',
            Password: ''

        }
    }
    LogInButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            LogInButtonState: true
        })
    }
    UserDataCheck = (e) => {
        e.preventDefault();
        // if (this.state.Name === 'admin' && this.state.Password ==='admin') {
        //     this.props.history.push('/Home')
        // }
        this.props.logIn(this.state.userData)
    }
    SetUserPass = (e) => {
        let userData = Object.assign({}, this.state.userData);    //creating copy of object
        userData.Password = e.target.value;                        //updating value
        this.setState({userData});
    }
    SetUserName = (e) => {
        let userData = Object.assign({}, this.state.userData);    //creating copy of object
        userData.Name = e.target.value;                        //updating value
        this.setState({userData});
    }
    render () {
        return (
            <div className="LogInWrapper">
                <div className="mainLogoWrapper">
                    <img className="mainLogo" src={mainLogo}></img>
                    {!this.state.LogInButtonState ?
                        <form onSubmit={this.LogInButtonClick}>
                            <button type="submit" className="journey">Log In</button>
                        </form>
                        : null}
                        {this.state.LogInButtonState ?
                            <form onSubmit={this.UserDataCheck}>
                                <input placeholder="Login" onChange={this.SetUserName}></input>
                                <input placeholder="Password" onChange={this.SetUserPass}></input>
                                <button type="submit" className="journey">Log In</button>
                            </form>
                            : null}
                        </div>
                    </div>
                )
            }
        }
        const mapDispatchToProps = (dispatch) => {
            console.log(dispatch);
            return {
                logIn: (credents) => dispatch(logIn(credents))
            }
        }
        //
        // const setLogInButtonState = (dispatch) => {
        //     return {
        //         setState: (nState) => {dispatch({type:'SET_STATE', nState: nState})}
        //     }
        // }
        export default connect(null, mapDispatchToProps)(LogIn)
