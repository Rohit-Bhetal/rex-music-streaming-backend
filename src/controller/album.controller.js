import { Album } from "../models/album.model.js"


export const getAllAlbums = async(req,res,next)=>{
    try {
        const albums = await Album.find();
        if (!albums || albums.length === 0) {
            const error = new Error("No albums found");
            error.statusCode = 404; 
            return next(error); // Pass the error 
        }

        // If albums are found, send them in the response
        res.status(200).json({
            success: true,
            data: albums
        });

    
    } catch (error) {
        next(error)
    }
}
export const getAlbumById = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const albumByid = await Album.findById(id).populate('songs');

        //Checks the album or the id is present or Not
        if (!id || !albumByid){
            const err =  new Error("Album not find or Id not given")
            err.statusCode=404
            return next(err)
        }
        res.status(200).json({
            success:true,
            data:albumByid
        })
    } catch (error) {
        next(error);
    }
}