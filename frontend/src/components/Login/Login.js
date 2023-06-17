
import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './login.css'
import { UserContext } from '../Context/UserContext'

const Login = () => {
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [ready, setReady] = useState(false)
    const { setUser } = useContext(UserContext)

    const logged = document.cookie.split('=')
    const token = logged[logged.length - 1]

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('http://localhost:5000/login',
                { email, pass },
                { withCredentials: true }
            )
            if (data === 'account not here') {
                alert('account not here')
            } else if (data === 'pass not ok') {
                alert('invaild Password')
            } else {
                setUser(data.found.username)
                setReady(true)
            }
        } catch (err) {
            throw (new Error('Something wrong'))
        }
    }
    if (ready) {
        return <Navigate to={'/'} />
    }
    if (token !== '') {
        return <Navigate to={'/'} />
    }
    return (
        <form onSubmit={handleLogin}>
            <h1 className='text-2xl font-bold'>Log in</h1>
            <input type="email" placeholder='Enter Email' required autoComplete="new-password" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Enter Password' required autoComplete="new-password" onChange={(e) => setPass(e.target.value)} />
            <input type="submit" value={'Submit'} />
            <p>Don't Have an Account ??  <Link to={'/register'}> Sign Up</Link></p>
        </form>
    )
}

export default Login
