import axios from 'axios'

const root = 'https://painaidee-backend.herokuapp.com'

export const getUsers = async (params)=>{
    let users
    try{
        users = await axios({
             method:'get',
             url:`${root}/users/${params.uid}`
         })
     }catch(error){
         console.log(error)
     }
     return users
}


export const getUser = async (params)=>{
    let user
    try{
       user = await axios({
            method:'get',
            url:`${root}/user/${params.uid}`
        })
    }catch(error){
        console.log(error)
    }
    return user
}

export const addUserToDB = async (params)=>{
    try{
       await axios({
            method:'post',
            url:`${root}/user`,
            data:params    
        })
    }catch(error){
        alert(error)
        throw error
    }
    return true
}

export const getInterest = async ()=>{
    let interest
    try {
        interest = await axios({
            method:'get',
            url:`${root}/interest`
        })
    }catch(error){
        alert(error)
        throw error
    }

    return interest
}

export const addInterestToDB = async (params)=>{
    try {
        await axios({
            method:'post',
            url:`${root}/user/interest`,
            data: params
        })
    }catch(error){
        alert(error)
        throw error
    }

    return true
}

export const getEvents = async (params)=>{
    let event
    try {
        event = await axios({
            method:'post',
            url:`${root}/events`,
            data:params
        })
    }catch(error){
        alert(error)
        throw error
    }

    return event
}


export const getEachEvent = async (params)=>{
    let event
    try {
        event = await axios({
            method:'get',
            url:`${root}/event/${params.name}`,
            data:params
        })
    }catch(error){
        alert(error)
        throw error
    }

    return event
}