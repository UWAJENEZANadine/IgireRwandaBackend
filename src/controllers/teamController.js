import bcrypt from "bcrypt";
import { receiveMessageOnPort } from "worker_threads";
import TeamInfo from "../models/team";
import path from "path"





class TeamController {
  //Create user

  static async createTeamate(req, res) {
    // const checkoutUser = TeamInfo.findOne({email:req.body.email});


    // if(checkoutUser){
    //   return  res.status(404).json({ error: "email arleady registered, please use other email" });
    // }

    // console.log(req.file);
    // let info = {
    //   names: req.body.names,
      // profileImage: req.file.path,
    //   Position: req.body.Position,
    //   description: req.body.description,
    // }

    const user = await TeamInfo.create(req.body) 
    if (!user) {
      return res.status(404).json({ error: "user not registered" });
    }
    return res
      .status(200)
      .json({ message: "teammate created successfully", data: user });
  }

  static async getallTeam(req, res) {
    const users = await TeamInfo.find()
    if (!users) {
      return res.status(400).json({ error: "Team member is not registerd" });
    }
    return res.status(200).json({ message: "Team members are found", data: users });
  }
  
  static async deleteOneTeamate(req, res) {
    const users = await TeamInfo.findByIdAndDelete(req.params.id);
    if (!users) {
      return res.status(400).json({ error: "Team member not deleted" });
    }
    return res.status(200).json({ message: "Team member is deleted" });
  };

  static async updateOneTeammate(req, res){
    const user = await TeamInfo.findByIdAndUpdate(req.params.id, req.body={new:true});

    if (!user){
      return res.status(400).json({error:"teamate is not updated"});
    }
    return res.status(200).json({message:"teammate is already updated"})
  }
  
}


export default TeamController;
