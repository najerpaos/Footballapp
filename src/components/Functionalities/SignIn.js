import React,{useEffect} from 'react'
import {GoogleButton} from 'react-google-button'
import { UserAuth } from '../../Context/Authcontext'
import { useNavigate } from 'react-router-dom'


const SignIn= ()=>{

    const {GoogleSignIn,user}=UserAuth();
    const Navigate=useNavigate()

    const handleGoogleSignIn= async ()=>{

        try{
            await GoogleSignIn()
        } catch (error){
            console.log(error)
        }
    }
    useEffect(()=>{
        if(user!=null){
            Navigate('/Account')
        }
    },[user])
    

    return (
        <div className='text-center text-3xl font-bold py-8'style={{ position: 'absolute', left: '35%', top: '20%'}}>
            <h1>Sign in</h1>
            <p>Sign in with your Google Account to chat and upload images</p>
            <div style={{ position: 'absolute', left: '20%', top: '105%'}} >
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>

        </div>
    )
}

export default SignIn
