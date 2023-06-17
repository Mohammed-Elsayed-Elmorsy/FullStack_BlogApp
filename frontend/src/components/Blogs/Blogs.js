import './blogs.css'

import { useContext, useEffect, useState } from 'react'

import Blog from '../Blog/Blog'
import axios from 'axios'
import NotLogged from '../HomeNotLgged/NotLogged'
import { UserContext } from '../Context/UserContext'
const Blogs = () => {
    const { user } = useContext(UserContext)
    const [posts, setPosts] = useState([])
    const [load, setLoad] = useState(true)
    const getPosts = async () => {
        const { data } = await axios.get('http://localhost:5000/posts')
        setPosts(data)
        setLoad(false)
    }
    useEffect(() => {
        if (user) {
            getPosts()
        }
    }, [])

    if (!load && posts.length === 0) {
        return <div className='blogs'>'No items'</div>
    }
    // IF NOt Logged in 
    if (!user) {
        return <NotLogged />
    }


    // IN CASE LOGGED IN THIS WHAT IS GOING TO BE RETURNED
    return (
        <div className='blogs' style={{
            position: 'relative'
        }}>
            {load && (
                <>
                    <h3 style={{
                        letterSpacing: '4px',
                        padding: '10px',
                        backgroundColor: 'white'
                    }}>Loading....</h3>
                    <div class="first"></div>
                    <div class="second"></div>
                    <div class="third"></div>
                    <div class="fourth"></div>
                    <div class="fifth"></div>
                </>
            )}
            {posts.length > 0 ? posts.map(post => {
                return (
                    <Blog {...post} key={post._id} />
                )
            }) : ''}

        </div >
    )
}

export default Blogs
