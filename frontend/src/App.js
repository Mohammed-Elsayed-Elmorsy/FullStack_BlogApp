import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Blogs from './components/Blogs/Blogs'
import axios from 'axios'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import NewPost from './components/NewPost/NewPost'
import PostDetail from './components/PostDetail/PostDetail'
////// solve problem of log out//////////////////
axios.defaults.withCredentials = true;
/////////////////////////////////////////////
const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Blogs />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/create-new-post' element={<NewPost />} />
                <Route path='/post/:id' element={<PostDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
