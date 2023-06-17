const ex = require('express')
const router = ex.Router()
const GetFile = require('../Middleware/index')
const
    { Register,
        Login,
        Verify,
        Logout,
        CreatePost,
        GetPosts,
        GetSpecificPost,
        Update,
        Delete
    } = require('../Controllers/index')
router.post('/register', Register)
router.post('/login', Login)
router.get('/profile', Verify)
router.post('/logout', Logout)
router.post('/create-new-post', GetFile, CreatePost)
router.get('/posts', GetPosts)
router.get('/post/:id', GetSpecificPost)
router.put('/update', Update)
router.delete('/delete/:id', Delete)
module.exports = router