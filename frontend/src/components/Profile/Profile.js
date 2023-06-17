import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { FaCheckCircle, FaFax } from 'react-icons/fa'


const Profile = () => {
    const { user } = useContext(UserContext)
    return (
        <div className='blogs' style={
            {
                backgroundColor: '#fff',
                padding: '10px'
            }
        }>
            <p style={{ color: 'grey' }}>Hello !!
                <h3 style={
                    {
                        color: 'black',
                        margin: '10px 0',
                        display: 'flex',
                        alignItems: 'center'
                    }
                }>
                    {user}
                    <FaCheckCircle style={{
                        color: 'green',
                        margin: '0 4px'
                    }} />
                </h3>
            </p>
            <p>Check Your Profile</p>
        </div>
    )
}

export default Profile
