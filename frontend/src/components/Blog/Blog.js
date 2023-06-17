import React from 'react'
import { Link } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'
const Blog = ({ title, desc, file, createdAt, owner, _id }) => {
    return (
        <div className='blog' key={_id}>
            <div className="image-container">
                <Link to={`/post/${_id}`}>
                    <img src={`http://localhost:5000/${file}`} alt="ALT" />
                </Link>
            </div>
            <div className="texts">
                <Link to={`/post/${_id}`}>
                    <h2>
                        {title}
                    </h2>
                </Link>
                <div className='info'>
                    <span>{owner.username}</span>
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </div>
                <p className="summary">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Blog
