import TeamInfo from "../models/team";

class datachecker{
    //check if email exist
    static async  isEmailExist(req,res,next){
        const user = await TeamInfo.findOne({email:req.body.email});
        if(!user){
            return next();
        }
        return res.status(404).json({error:"email arleady exists!"})
    }
    
}

export default datachecker;