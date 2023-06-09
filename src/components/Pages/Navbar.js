import React from 'react'
import {Link} from 'react-router-dom'
import { UserAuth } from '../../Context/Authcontext'

const Navbar = ()=> {
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
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link clclassNameass="navbar-brand" to="/"><img src={require("./nysl_logo.png")} width="50" height="50"/></Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/Schedule">Schedule</Link>
        {user?.displayName ?(<p className="nav-link" onClick={handleSignOut}>Sign Out</p>):
        <Link className="nav-link" to="/SignIn"> Sign in</Link>}
        </ul>
        </nav>
        </div>

    )
}

export default Navbar