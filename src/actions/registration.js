export const registration = (credentials, scope) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        let email = credentials.Email,
        pass = credentials.Password;

        function login() {
            firebase.auth().signInWithEmailAndPassword(email, pass)
                .then((a) =>{
                    dispatch({type: 'LOGIN_SUCCESS'});
                    scope.redirectToHome();
                })
                .catch((error) =>{
                    if(error.code === 'auth/wrong-password') {
                        dispatch({type: 'UNSECCESFUL_LOGIN', error})
                    } else {
                        emailExist()
                    }
                })
        }

        login();
            function emailExist() {
                firebase.auth().createUserWithEmailAndPassword(email,pass)
                .then((response) =>{
                    return firestore.collection('users').doc(response.user.uid).set({})
                })
                .then((error) =>{
                    login()
                })
                .catch((error) =>{
                })
        }


    }
}
