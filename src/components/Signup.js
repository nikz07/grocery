import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../services/AuthService'

function Signup() {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    async function register(event) {
        event.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Password and Confirm Password do not match')
        } else {
            try {
                setError('')
                setLoading(true)
                await AuthService.signup(emailRef.current.value, passwordRef.current.value)
                history.push("/login")
            } catch {
                setError('Failed to register.')
            }
        }
        setLoading(false)

    }

    return (
        <div className="container">
            <div className="card">
                <div className="cardBody">
                    {error && <alert>{error}</alert>}
                    <form onSubmit={register}>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" ref={emailRef} required />
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" ref={passwordRef} required />
                        <label>Confirm Password</label>
                        <input type="password" name="email" placeholder="Confirm Password" ref={confirmPasswordRef} required />
                        <button disabled={loading} type="submit" >Signup</button>
                    </form>
                </div>
            </div>
            Already have an account? <Link to="login" >Login</Link>
        </div>
    )
}

export default Signup

