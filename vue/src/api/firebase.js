import firebase from 'firebase'

export const signUp = (email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(error=>{
        throw(error.message)
    })
}

export const signIn = (email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error=>{
        throw(error.message)
    })
}

export const signOut = ()=>{
    firebase.auth().signOut().catch(error=>{
        throw(error.message)
    })
}

export const getUser = ()=>{
    return firebase.auth().currentUser
}