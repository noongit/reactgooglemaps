import React, { Component } from 'react';
import mainLogo from '../img/main.jpg';
import { connect } from 'react-redux';
import { logIn } from '../actions/logIn'
class LogIn extends Component {
    state = {
        LogInButtonState: false,
        userData: {
            Email: '',
            Password: ''
        }
    }

    LogInButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            LogInButtonState: true
        })
    }

    redirectToHome() {
        if (this.props.authError === 'success') {
            this.props.history.push('/Home')
        }
    }

    UserDataCheck = (e) => {
        e.preventDefault();
        this.runLogin()
    }

    runLogin(){
        var scope = this;
        this.props.logIn(this.state.userData, scope)
    }

    SetUserPass = (e) => {
        let userData = Object.assign({}, this.state.userData);
        userData.Password = e.target.value;
        this.setState({userData});
    }

    SetUserEmail = (e) => {
        let userData = Object.assign({}, this.state.userData);
        userData.Email = e.target.value;
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
                                <input placeholder="Login" onChange={this.SetUserEmail}></input>
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
            return {
                logIn: (creds, scope) => dispatch(logIn(creds, scope))
            }
        }

        const mapStateToProps = (state) => {
            return {
                authError: state.auth.authError
            }
        }

        export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
