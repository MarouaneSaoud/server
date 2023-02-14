const { register, login } = require("../controllers/authControllers");
const { checkUser } = require("../middlewares/authMiddleware");
const router = require("express").Router();
const multer = require("multer");

//--multer configurations ----//
const storage= multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/ProfileImage')
  },
  filename: function (req, file, cb) {
    const fileName = Date.now() +'-' + Math.round(Math.random() * 1E9)+'-'+file.originalname.replace(/\s+/g,'-');
    cb(null,fileName)
  }});
const upload = multer({storage}).single('image'); 

router.post("/", checkUser); 
router.post("/register", upload, register);
router.post("/login", login);

router.post('/uploads', upload , (req , res)=>{
    const {file}=req;
    res.send({file:file.originalname , path:file.path})
  })

module.exports = router;
