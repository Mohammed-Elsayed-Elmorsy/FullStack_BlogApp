const Register = async (req, res) => {
    const { email, pass, username } = req.body
    const found = await User.findOne({ email })


    if (found) {
        res.json({ data: 'found account' })
    }
    else {
        const user = await User.create(
            { email, username, pass: bycrypt.hashSync(pass, salt) }
        )
        res.json({ data: user })
    }
}

const JWT = require('jsonwebtoken')
const secretjwt = 'dfjhrthieuymcrhggfkyuiwszxm.'
// Bycrypt
// UserModel
const User = require('../schema/UserSchema')
// Post Model
const Post = require('../schema/PostSckema')
const bycrypt = require('bcrypt')
const salt = bycrypt.genSaltSync(10)
const Login = async (req, res) => {
    const { email, pass } = req.body
    try {
        const found = await User.findOne({ email })
        if (found) {
            const passOk = bycrypt.compareSync(pass, found.pass)
            if (passOk) {
                JWT.sign({ email: found.email, username: found.username, id: found._id }, secretjwt, {}, (err, token) => {
                    if (err) throw err
                    res.cookie('token', token).json({ found })
                })
            } else {
                res.json('pass not ok')
            }
        } else {
            res.json('account not here')
        }
    } catch (err) {

    }
}
// بتاكد انو مسجل وفيه توكن وبعدين اخد اليوزر نيم من الرسيبونس 
const Verify = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        JWT.verify(token, secretjwt, {}, (err, user) => {
            if (err) throw err
            res.json(user)
        })
    } else {
        res.json(null)
    }
}
const Logout = (req, res) => {
    res.cookie('token', '').json(true)
}
const fs = require('fs')
const CreatePost = async (req, res) => {
    const { path, originalname } = req.file
    console.log(path, originalname);
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext
    fs.renameSync(path, newPath)

    const { token } = req.cookies;
    if (token) {
        JWT.verify(token, secretjwt, {}, async (err, user) => {
            if (err) throw err
            console.log(user);
            const { title, desc } = req.body
            const postDoc = await Post.create({
                title,
                desc,
                file: newPath,
                owner: user.id
            })
            res.json({ postDoc })
        })

    }
}
const GetPosts = async (req, res) => {
    res.json(await Post
        .find()
        .populate('owner', ['username'])
        .sort({ createdAt: -1 })//arrange by time 
        .limit(20)//20 items only
    )
}
const GetSpecificPost = async (req, res) => {
    const { id } = req.params
    res.json(await Post
        .findById(id)
        .populate('owner', ['username']))
}
const Update = async (req, res) => {
    const { desc, title, id } = req.body
    res.json(await Post.findByIdAndUpdate(id, { desc, title }))
}
const Delete = async (req, res) => {
    const { id } = req.params
    await Post.deleteOne({ _id: id })
    res.json('deleted')
}
module.exports =
{
    Register,
    Login,
    Verify,
    Logout,
    CreatePost,
    GetPosts,
    GetSpecificPost,
    Update,
    Delete
}