export const logIn = (credentials, scope) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log(getFirestore())
        const firebase = getFirebase();
        const firestore = getFirestore();
        let email = credentials.Email,
        pass = credentials.Password;
        function emailExist() {
            firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(() =>{
                dispatch({type: 'LOGIN_SUCCESS'});
                scope.redirectToHome();
            })
            .catch((error) =>{
                dispatch({type: 'UNSECCESFUL_LOGIN', error})
            })
        }
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then((response) =>{
            return firestore.collection('users').doc(response.user.uid).set({})
        })
        .then(() =>{
            emailExist()
        })
        .catch(() =>{
            emailExist()
        })
    }
}
