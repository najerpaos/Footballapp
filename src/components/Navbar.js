import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=> {
    return (
        <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <Link class="navbar-brand" to="/">NYSL</Link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Link class="nav-link" to="/">Home</Link>
        <Link class="nav-link" to="/Schedule">Schedule</Link>
        </ul>
        </nav>
        </div>

    )
}

export default Navbar