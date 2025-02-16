import { Song } from "../models/song.model.js"

//fecth all songs
export const getAllSong = async(req,res,next)=>{

    try {
        //Fetching the all songs and sorting in a descending order based on createdAt field
        const allsong = await Song.find().sort({createdAt: -1})
        res.status(200).json({
            data: allsong,
            success:true
        })
    } catch (error) {
        next(error);
    }
}

//fetch songs on Random 
//todo: Add a Ai MOdel to to make a recommendation hope I will do it 😂😂

export const getFeaturedSong = async(req,res,next)=>{
    //Getting the featured data currently im randoml;y selecting But later on I will add a ml model
    try {
        const songs = await Song.aggregate(
            [
            
                {
                    $project:{
                        _id:1,
                        title:1,
                        artist:1,
                        imageUrl:1,
                        audioUrl:1,
                        duration:1,
                        source: { $literal: "local" }
                    }
                }
            ]
        ).sample(7);
        
        res.json(songs)
    } catch (error) {
        next(error);
    }


}
export const getMadeForYouSongs = async(req,res,next)=>{
    //Getting the featured data currently im randoml;y selecting But later on I will add a ml model
    try {
        const songs = await  Song.aggregate(
            [
                
                {
                    $project:{
                        _id:1,
                        title:1,
                        artist:1,
                        imageUrl:1,
                        audioUrl:1,
                        duration:1,
                        source: { $literal: "local" }
                    }
                }
            ]
        ).sample(7);
        
        res.json(songs)
    } catch (error) {
        next(error);
    }


}



