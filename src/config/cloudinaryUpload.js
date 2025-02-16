import cloudinary from "../lib/cloudinary.js"

export const  uploadToCloudinary = async(file)=>{
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath,{
            resource_type:'auto'
        })
        return result.secure_url
    } catch (error) {
        console.log("Error in Upload to Cloudinary",error);
        throw new Error("Error uploading to Cloduinary")
    }
}