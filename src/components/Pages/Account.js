import React from 'react'
import { UserAuth } from '../../Context/Authcontext'
import ChatBox from '../Functionalities/ChatBox'
import LoadImage from "../Functionalities/images"




const Account= ()=>{
    const{user,logOut}=UserAuth()

    const handleSignOut=async ()=>{
        try{
            await logOut()
        } catch(error){
            console.log(error)
        }
    }


    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-8 d-grid gap-3' style={{marginTop:'2%'}}>Welcome {user?.displayName}</h1>
            <div className='text-center text-3xl font-bold py-8' style={{position:'absolute', left: '7%',top:'23%',marginBottom:'2%'}}>
            <h5 style={{marginBottom:'8%'}}>Cheer your team by sending message through the chatbox!</h5>
            <ChatBox />
            </div>

            <div className='text-center text-3xl font-bold py-8'style={{position:'absolute', left:'53%', top:'19%',marginTop:'2%'}}>
            <h5 style={{marginBottom:'10%'}}>Upload your favourite images from the match!</h5>
            <LoadImage/>
            </div>
            
        
        </div>
    )
}

export default Account
