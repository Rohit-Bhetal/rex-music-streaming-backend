import { Song } from "../models/song.model.js"


export const themeImageController = async(req,res)=>{
    try {
        const imageData = await Song.find({
            
        },{imageUrl:1,title:1}).limit(5);
        res.json(imageData)
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
}