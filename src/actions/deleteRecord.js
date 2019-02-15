export const deleteRecord = (path) => {
    let names = [],
    coords = [];
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(''+document.cookie.substring(4)).collection('pathes').doc(''+path).delete()
        .then(()=>{
            firestore.collection('users').doc(''+document.cookie.substring(4)).collection('pathes').get()
            .then(snap => {
                snap.forEach(doc =>{
                    let str = doc._document.proto.name
                    names.push(str.substring(str.indexOf("pathes/") + 7))
                })
                snap.forEach(doc =>{
                    coords.push(doc._document.proto.fields.data.mapValue.fields)
                })
            })
            .then(()=>{
                dispatch({type: 'DATA_ADDED', names, coords})
            })
        })


    }
}
