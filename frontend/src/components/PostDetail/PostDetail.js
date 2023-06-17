import axios from 'axios'
import { formatISO9075 } from 'date-fns'
import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import { UserContext } from '../Context/UserContext'
import EditForm from '../EditForm/EditForm'
const PostDetail = () => {
    const { userID } = useContext(UserContext)
    const { id } = useParams()
    const [postdata, setPostdata] = useState(null)
    const [editForm, setEditForm] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const getPost = async () => {
        const res = await axios.get(`http://localhost:5000/post/${id}`)
        setPostdata(await res.data)
    }
    useEffect(() => {
        getPost()
    }, [])

    if (editForm) {
        return <EditForm id={id} />
    }
    const DELETEITEM = async () => {
        const { data } = await axios.delete(`http://localhost:5000/delete/${id}`,
            { withCredentials: true })
        console.log(data);
        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    if (postdata !== null) {
        return (
            <div className='blogs' style={{ padding: '10px', backgroundColor: '#fff' }}>
                <time>{formatISO9075(new Date(postdata.createdAt))}</time>
                <br />
                <span style={
                    {
                        margin: '3px 0 0px',
                        padding: '5px 0',
                        display: 'block',

                    }
                }>
                    Created By
                    <span style=
                        {
                            {
                                fontWeight: 'bold',
                                margin: '0 5px',
                                display: 'inline-flex',
                                alignItems: "center",
                                flexDirection: 'row-reverse'
                            }
                        }>
                        <FaCheck style={{
                            color: 'green',
                            margin: '0 4px'
                        }} />
                        {postdata.owner.username}
                    </span>
                    <br />
                </span>
                {
                    userID === postdata.owner._id && (
                        <button className='btn edit' onClick={() => setEditForm(true)} style={{
                            display: 'inline-flex',
                            width: '150px',
                            margin: '10px 10px 10px 0',
                            justifyContent: 'space-between',
                            padding: '10px',
                            cursor: 'pointer',
                            fontSize: '17px',
                            transition: '0.3s'
                        }}>
                            EDIT POST
                            <FaEdit style={{
                                color: 'blueviolet'
                            }} />
                        </button>
                    )
                }
                {
                    userID === postdata.owner._id && (
                        <button onClick={DELETEITEM} className='btn delete' style={{

                            display: 'inline-flex',
                            justifyContent: 'space-between',
                            width: '160px',
                            margin: '10px 0',
                            padding: '10px',
                            cursor: 'pointer',
                            fontSize: '17px',
                            transition: '0.3s'
                        }}>
                            DELETE POST
                            <FaTrash style={{
                                color: '#c20505'
                            }} />
                        </button>
                    )
                }


                <div style={{ height: '350px' }}>
                    <img src={`http://localhost:5000/${postdata.file}`} alt="alt image" />
                </div>
                <div>
                    <h2 style={{ margin: '10px 0' }}>{postdata.title}</h2>
                    <p>{postdata.desc}</p>
                </div>
            </div>
        )
    } else {
        return <div style={{
            fontSize: '19px',
            backgroundColor: 'white',
            padding: '10px'
        }} className='blogs'>L o a d i n g . . .</div>
    }

}

export default PostDetail
