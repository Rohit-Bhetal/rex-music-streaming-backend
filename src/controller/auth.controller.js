import { User } from "../models/user.model.js";

export const authCallback = async (req,res)=>{
    try {

        const {id,firstName,lastName,imageUrl} = req.body;

        //Check the Clerrk ID in DB
        const user= await User.findOne({clerkId:id});
        if(!user){
            await User.create({
                clerkId:id,
                fullName: `${firstName} ${lastName}`,
                imageUrl
            });
        }
        res.status(200).json({
            success:true
        });
    } catch (error) {
        console.log("Error in auth Callback,Check the Documentation :",error);
        res.status(500).json({
            message :"Internal error: ",error
        })
    }
}