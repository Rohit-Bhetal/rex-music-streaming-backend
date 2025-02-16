//imports 
import { Song } from './../models/song.model.js';
import { Album } from './../models/album.model.js';
import {uploadToCloudinary} from './../config/cloudinaryUpload.js';


//Code


export const createSong=async(req,res,next)=>{

    try {
        //Checks the details are send or not
        if(!req.files || !req.files.audioFile || !req.files.imageFile || !req.body){
            return res.status(400).json({
                message:"File Misssing in your request"
            })}

        const {title,artist,albumID,duration}=req.body
        const audioFile= req.files.audioFile
        const  imageFile = req.files.imageFile
        const audioUrl =await uploadToCloudinary(audioFile);
        const imageUrl = await uploadToCloudinary(imageFile)

        //Using the  Song Model to push the data
        const song = new Song({
            title:title,
            artist:artist,
            audioUrl,
            imageUrl,
            duration:duration,
            albumId:albumID ||null

        })

        await song.save()
        if(albumID){
            //If album dont exists
            const album = await Album.findById(albumID);
            if (!album) {
                return res.status(404).json({
                    message: "Album not found",
                });
            }
            await Album.findByIdAndUpdate(albumID,{
                $push:{
                    songs:song._id
                }
            })

        }
        res.status(201).json({
            message:"Song has been added"
        })

        
    } catch (error) {
        console.
        error.statusCode=500
        next(error);
    }
}

export const deleteSong = async(req,res,next)=>{
    try {
        const {id} = req.params // Getting the id of the song to delete
        const song = await Song.findById(id)
        //Checking if song exists
        if (song.albumId){
            await Album.findByIdAndUpdate(song.albumId,{
                $pull:{
                    songs:song._id
                }
            })
        }
        await Song.findByIdAndDelete(id);
        res.status(200).json({
            message:`Song with reference id ${id} deleted`
        });

    } catch (error) {
        error.statusCode=500
        next(error)
    }
}

export const createAlbum = async(req,res,next)=>{
    try {
        const {title,artist,releaseYear} = req.body;
        const {imageFile}=req.files
        const imageUrl= await uploadToCloudinary(imageFile)

        const album = Album(
            {
                title,
                artist,
                releaseYear,
                imageUrl
            }
        )
        await album.save()
        res.status(201).json({
            message:"The Album is created"
        })


    } catch (err) {
        console.error('🟥 Error: ', err)
        next(err)
    }
    
}

export const deleteAlbum = async(req,res,next)=>{
    try {
            const {id}=req.params;
        
            const album = await Album.findById(id);
            
            if (!id) {
            return res.status(400).json({
                message: "Album ID is required",
            });
            }
                if (!album) {
                    return res.status(404).json({
                        message: "Album not found",
                    });
                }
                await Song.deleteMany({albumId:id})
                await Album.findByIdAndDelete(id)
                res.status(200).json({
                    message:"Album deleted Succesfully"
                })
        
        
    } catch (error) {
        console.error('🟥 Error: ', error)
        next(error)
    }
}

//checking Admin if the endpoint request passes through all middleware without error It means it a valid Admin Request.We will just send a True in json

export const checkAdmin=async(req,res,next)=>{
    res.status(200).send(true)
    
}