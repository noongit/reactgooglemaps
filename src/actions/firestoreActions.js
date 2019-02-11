export const firestoreActions = (data, scope) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        let date = new Date();
        console.log(date)
        const firestore = getFirestore();
            firestore.collection('users').doc(''+scope.props.auth.uid).collection('pathes').doc('' + date).set({
                data
            })
    }
}
