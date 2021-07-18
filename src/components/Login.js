import React, {useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../services/AuthService'

function Login() {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError(error)
            setLoading(true)
            await AuthService.login(emailRef.current.value, passwordRef.current.value)
            history.push("/home")
        } catch {
            setError('Username or Password incorrect.')
        }
        setLoading(false)

    }

    return (
        <div className="container">
            <div className="card">
                <div className="cardBody">
                    {error && <alert type="validation">{error}</alert>}
                    <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input name="email" placeholder="Email" type="email" ref={emailRef} required></input> <br></br>
                    <label>Password</label>
                    <input name="password" placeholder="Password" type="password" ref={passwordRef} required></input><br></br>
                    <button disabled={loading} type="submit">Login</button>
                    </form>
                </div>
            </div>
            Create a new account. <Link to="signup" >Signup</Link>
        </div>
    )
}

export default Login

