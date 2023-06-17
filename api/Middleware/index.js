
// Multer to get files
const Multer = require('multer')
const photoMiddleWare = Multer({ dest: 'uploads/' })

const GetFile = photoMiddleWare.single('file')

module.exports = GetFile