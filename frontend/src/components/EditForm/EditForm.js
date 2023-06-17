import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCheckDouble, FaCheckSquare } from 'react-icons/fa'
import { Navigate } from 'react-router-dom'

const EditForm = ({ id }) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [redirect, setRedirect] = useState(false)
    const getDAta = async () => {
        const { data } = await axios.get(`http://localhost:5000/post/${id}`)
        setTitle(data.title)
        setDesc(data.desc)
    }
    useEffect(() => {
        getDAta()
    }, [])
    const handleUpdate = async (e) => {
        e.preventDefault()
        const { data } = await axios.put('http://localhost:5000/update',
            { title, desc, id },
            { withCredentials: true })
        setRedirect(true)
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form onSubmit={handleUpdate} style={{
            padding: '20px'
        }}>
            <h2 style={
                {
                    backgroundColor: 'white', padding: '15px 0 15px 10px',
                }
            }>Update Post</h2>
            <div style={{ backgroundColor: 'white', padding: '10px' }}>
                <h3>Title <FaCheckDouble style={{
                    color: 'grey'
                }} /></h3>
                <input style={{ borderRadius: '0', margin: '10px 0 15px', border: '1px solid #EEE', backgroundColor: '#f7f7f7' }} type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div style={{ marginBottom: '15px', backgroundColor: 'white', padding: '10px' }}>
                <h3>Description <FaCheckDouble style={{
                    color: 'grey'
                }} /></h3>
                <input style={{ borderRadius: '0', margin: '10px 0 15px', border: '1px solid #EEE', backgroundColor: '#f7f7f7' }} type="text" required value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <input type="submit" value={'Update'} style={{ borderRadius: '0' }} />
        </form>
    )
}

export default EditForm
