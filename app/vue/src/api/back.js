import axios from 'axios'


export const getUsers = async (params)=>{
    let users
    try{
        users = await axios({
             method:'get',
             url:`http://localhost:3000/users/${params.uid}`
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
            url:`http://localhost:3000/user/${params.uid}`
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
            url:'http://localhost:3000/user',
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
            url:'http://localhost:3000/interest'
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
            url:'http://localhost:3000/user/interest',
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
            url:'http://localhost:3000/events',
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
            url:`http://localhost:3000/event/${params.id}`,
            data:params
        })
    }catch(error){
        alert(error)
        throw error
    }

    return event
}