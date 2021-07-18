import React from 'react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className="container">
            <Link to="signup" >SignUp</Link>
            <Link to="login">Login</Link>
            
        </div>
    )
}
