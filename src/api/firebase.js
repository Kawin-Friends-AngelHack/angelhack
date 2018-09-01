import firebase from 'firebase'

export const signUp = async (email,password)=>{

    let user
    try{
        user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        return user
    }catch(error){
        throw(error.message)
    }
    
}

export const signIn = async (email,password)=>{

    let user
    try{
        user = await firebase.auth().signInWithEmailAndPassword(email, password)
        return user
    }catch(error){
        throw(error.message)
    }
    
}


export const signOut = async ()=>{
    firebase.auth().signOut().catch(error=>{
        throw(error.message)
    })
}

export const getUser = async  ()=>{
    let user = await firebase.auth().currentUser
    return user
}

export const getUserWhenInit = async ()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           return user
        } else {
            return null
        }
    });
}


