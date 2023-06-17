import React, { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
const NewPost = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')
    const [ready, setReady] = useState(false)
    const CREATE_NEW_POST = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.set('file', file[0])
        data.set('title', title)
        data.set('desc', desc)
        console.log(data);
        try {
            const res = await axios.post('http://localhost:5000/create-new-post',
                data,
                { withCredentials: true })
            setReady(true)
        } catch (err) {
            throw (new Error('No Data Fetched'))
        }
    }
    if (ready) {
        return <Navigate to={'/'} />
    }
    // async function uploadFile(e) {
    //     const files = e.target.files
    //     const data = new FormData()
    //     data.set('file', files[0])
    //     console.log(data);
    // }
    return (
        <form onSubmit={CREATE_NEW_POST}>
            <h1 className='text-2xl font-bold'>Create New Post</h1>
            <input type="text" placeholder='Enter Title' required autoComplete={'true'} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder='Enter Description' required autoComplete={'false'} onChange={(e) => setDesc(e.target.value)} />
            <input type="file" required onChange={(e) => setFile(e.target.files)} />
            <input type="submit" value={'Create New post'} />
        </form>
    )
}

export default NewPost
