import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../actions/registration'
class LogIn extends Component {
    state = {
        LogInButtonState: false,
        userData: {
            Email: '',
            Password: ''
        },
        height: null
    }

    LogInButtonClick = (e) => {
        e.preventDefault();
        this.setState({
            LogInButtonState: true
        })
    }

    redirectToHome() {
        if (this.props.authError === 'success') {
            document.cookie = "uid="+this.props.auth.uid;
            this.props.history.push('/Home');
        }
    }

    UserDataCheck = (e) => {
        e.preventDefault();
        this.runLogin()
    }

    runLogin(){
        var scope = this;
        this.props.registration(this.state.userData, scope);
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

    updateDimensions() {
        let height;
        if(document.getElementById('mainLogoWrapper')){
            height = document.getElementById('mainLogoWrapper').offsetWidth;
        }
        this.setState({
            height
        })
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    render () {
        return (
            <div className="logInWrapper">
                <p>Tip: Enter any valid email and pass to login </p>
                <div className="mainLogoWrapper" id="mainLogoWrapper" style={{height: this.state.height}}>
                    {!this.state.LogInButtonState ?
                        <form onSubmit={this.LogInButtonClick}>
                            <button type="submit" className="journey">Log In</button>
                        </form>
                    : null}
                        {this.state.LogInButtonState ?
                            <form onSubmit={this.UserDataCheck}>
                                <input placeholder="Login" onChange={this.SetUserEmail}></input>
                                <input type="Password" placeholder="Password" onChange={this.SetUserPass}></input>
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
                registration: (creds, scope) => dispatch(registration(creds, scope))
            }
        }

        const mapStateToProps = (state) => {
            return {
                authError: state.auth.authError,
                auth: state.firebase.auth
            }
        }

        export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
