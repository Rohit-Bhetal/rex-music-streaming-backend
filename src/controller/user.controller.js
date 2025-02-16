
import { User } from './../models/user.model.js';

//getAllUser 
export const getAlluser = async(req,res,next)=>{
        try {
                const currentUser = req.auth.userId;
                const users = await User.find({
                    clerkId:{ $ne: currentUser}
                });
                res.status(200).send(
                    users
                )
        } catch (error) {
                 next(error);
        }}