import {check,validationResult}from "express-validator";
class Validator{
    static ValidatorInput=(req,res,next)=>{
        const errors =validationResult(req);
        if(!errors.isEmpty()){
            const errorMessage= errors.errors.map((err) =>err.msg);
        return res.status(400).json({message: errorMessage});

    }
    return next();
    }
    static newAccountRules(){
        return[
        check("email","email is invalid").trim().isEmail(),
        check("password","password is not strong").trim().isStrongPassword(),
        check("title","please type correct name should be valid").trim().isAlpha(),
        check("Position","Position should be valid").trim().isAlpha(),
    
        ];
    }


    

}
export default Validator;