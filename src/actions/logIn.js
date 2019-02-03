export const logIn = (credentials, scope) => {
    console.log(credentials)
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        let email = credentials.Email,
            pass = credentials.Password
        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'});
            scope.redirectToHome();
        }).catch((error) =>{
            console.log(error);
            dispatch({type: 'UNSECCESFUL_LOGIN', error})
        })
    }
}
