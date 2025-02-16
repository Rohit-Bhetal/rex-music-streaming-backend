import { Song } from '../models/song.model.js';
import { Album } from './../models/album.model.js';
import { User } from './../models/user.model.js';



export const getStats = async(req,res,next)=>{
    try {   

            const [totalSongs,totalAlbums,totalArtist,totalUser] = await Promise.all(
                Song.countDocuments(),
                Album.countDocuments(),
                Song.distinct('artist').length,
                User.countDocuments()


            )
            //changes: Above Code way more optimized than this 

            // const totalSongs = await Song.countDocuments()
            // const totalAlbums = await Album.countDocuments()
            // const toalArtist =Song.aggregate([
            //     {
            //         $group: { _id: "$artist" } // Group by the 'artist' field
            //     },
            //     {
            //         $count: "uniqueArtists" // Count the number of unique groups
            //     }
            // ]);

            // const userTotal = await User.countDocuments()
            res.status(200).json({
                totalSongs,totalAlbums,totalArtist,totalUser
            })
    } catch (error) {
             next(error);
    }}