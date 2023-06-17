import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './register.css'
import axios from 'axios'

const Register = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [ready, setReady] = useState(false)

    const register = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:5000/register',
                { username, email, pass },
                { withCredentials: true })
            if (data.data === 'found account') {
                alert('Account Taken')
            } else {
                setReady(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (ready) {
        return <Navigate to={'/login'} />
    }
    return (

        <form onSubmit={register}>
            <h1 className='text-2xl font-bold'>Resister</h1>
            <input type="text" placeholder='Enter Name' value={username} required autoComplete="new-password" onChange={(e) => setUserName(e.target.value)} />
            <input type="email" placeholder='Enter Email' value={email} required autoComplete="new-password" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Password' value={pass} required autoComplete="new-password" onChange={(e) => setPass(e.target.value)} />
            <input type="submit" value={'Submit'} />
            <p>Have an Account ??  <Link to={'/login'}> Sign in</Link></p>
        </form>
    )
}

export default Register

