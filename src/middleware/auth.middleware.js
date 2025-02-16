import { clerkClient } from "@clerk/express";
import dotenv from 'dotenv';
dotenv.config();
export const protectRoute =async(req,res,next)=>{
 if(!req.auth.userId){
    return res.status(401).json({
        message:"Unauthorized -attempt,For use when authentication is possible but has failed or not yet been provided.Please Login or Check the Documentation"
    });
     
 }
 next();
};

//Admin Checker and give the authorization to do the task
export const requireAdmin =async(req,res,next)=>{

    try {
        const currentUser= await clerkClient.users.getUser(req.auth.userId);
        const isAdmin = process.env.ADMIN === currentUser.primaryEmailAddress.emailAddress;
        
        if(!isAdmin){
            return res.status(403).json({
                message:"The request was a legal request, but the server is refusing to respond to it"
            })
        }
        next();
    } catch (error) {
        error.statusCode=500
        next(error)
    }
};

