import { NavLink } from 'react-router-dom'
import './Home.css'
import { FiUser, FiUserPlus } from 'react-icons/fi'
const NotLogged = () => {
    return (
        <div className='blogs'>
            <h2 style=
                {{ marginBottom: '15px', backgroundColor: '#fff', padding: '10px' }}
            >Home Page You Could Log in Or register
            </h2>
            <div className='home-land-page'>
                <div className='over'> </div>
                <div style={{
                    position: 'relative',
                    zIndex: '10',
                    display: 'flex',
                    gap: '15px'
                }}>
                    <NavLink style={{
                        backgroundColor: 'white', margin: '10px 10px 0px 0px', padding: "10px", display: 'inline-block'
                    }} to={'/login'}>LOG IN <FiUserPlus className='icon' style={{
                        color: 'orangered',
                    }} /></NavLink>
                    <NavLink style={{
                        backgroundColor: 'white', margin: '10px 10px 0px 0px ', padding: "10px", display: 'inline-block'
                    }} to={'/register'}>SIGN UP <FiUser className='icon' style={{
                        color: 'orangered',
                    }} /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default NotLogged
