import React, { useContext, useState } from 'react'

import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { FaCreativeCommons, FaNewspaper, FaUser, FaUserCheck, FaUserSlash } from 'react-icons/fa'
import { UserContext } from '../Context/UserContext'
import Logout from '../Logout/Logout'
import { FiUserPlus, FiUser } from 'react-icons/fi'
const Header = () => {
    const { user, setUser } = useContext(UserContext)
    const [log, setLogout] = useState(false)
    const logout = async () => {
        await axios.post('http://localhost:5000/logout')
        setUser(null)
        setLogout(false)
        window.location.href = '/'
    }
    return (
        <header style={{ backgroundColor: '#fff', padding: '10px', margin: '10px auto' }}>
            <Logout logout={logout} setLogout={setLogout} log={log} />
            <div className='logo'>
                <NavLink to={'/'}>
                    MyBlog
                </NavLink>
            </div>
            <nav>
                {!user && (
                    <li>
                        <NavLink style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            // borderRadius: '25px'
                        }} to={'/login'}>
                            Sign in
                            <FiUserPlus className='icon' style={{
                                color: 'orangered',
                                margin: '0 4px'
                            }} />
                        </NavLink>
                    </li>
                )}
                {!user && (
                    <li>
                        <NavLink style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '10px',
                            // borderRadius: '25px'
                        }} to={'/register'}>
                            Register
                            <FiUser className='icon' style={{
                                color: 'orangered',
                                margin: '0 4px'
                            }} />
                        </NavLink>
                    </li>
                )}
                {
                    !!user && (
                        <span className='create'>
                            <NavLink to={'/create-new-post'}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    // borderRadius: '25px'
                                }}>
                                Create New Post
                                <FaNewspaper className='icon'
                                    style={{
                                        color: '#c0810c',
                                        margin: '0 5px'
                                    }} />
                            </NavLink>
                        </span>
                    )
                }
                {
                    !!user && (
                        <span onClick={() => setLogout(true)}>
                            <li className='user'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    // borderRadius: '25px'
                                }}>
                                Log Out
                                <FaUserSlash className='icon'
                                    style={{
                                        color: '#c0810c',
                                        margin: '0 5px'
                                    }} />
                            </li>
                        </span>
                    )
                }
                {
                    !!user && (
                        <NavLink to={'/profile'}>
                            <li className='user'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '10px',
                                    // borderRadius: '25px'
                                }}>
                                {user}
                                <FaUserCheck className='icon'
                                    style={
                                        { color: '#c0810c', margin: '0 5px' }
                                    } />
                            </li>
                        </NavLink>
                    )
                }
            </nav>
        </header>
    )
}

export default Header
