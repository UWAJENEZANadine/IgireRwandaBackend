import express from "express";
import TeamController from "../controllers/teamController";
import multer from "multer";
import path from "path"

// const upload = multer({dest:'uploads/'});


const storage = multer.diskStorage({

    destination:  (req, file, cb)=>{
        cb(null, 'uploads/');
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize:'1000000'},
    fileFilter:(req, file, cb)=>{
        const fileTypes = /jpeg|jpg|png|gif/
        const mimType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))
        if(mimType && extname){
            return cb(null, true)
        }
        cb('give proper file format to upload')


    }
});



const userRouter = express.Router(); 	
//  userRouter.post("/register",
//  datachecker.isEmailExist,
//  Validator.newAccountRules(),
//  Validator.ValidatorInput,
//   UserController.createUser)

userRouter.post("/register", upload.single('profileImage'),TeamController.createTeamate)

userRouter.get("/all",TeamController.getallTeam)
userRouter.delete("/:id",TeamController.deleteOneTeamate)
userRouter.put("/:id", TeamController.updateOneTeammate)


export default userRouter;