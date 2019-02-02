export const logIn = (credentials) => {
    console.log(credentials);
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.Password,
            credentials.Name
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((error) =>{
            dispatch({type: 'UNSECCESFUL_LOGIN', error})
        })
    }
}
