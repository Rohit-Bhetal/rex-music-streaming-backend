export const errorHandler =(err,req,res,next)=>{
    console.log("Error handler Middleware Working....");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something Unexpected happended';
    res.status(errStatus).json({
        status:errStatus,
        error:errMsg,
        success:false,
        stack:process.env.NODE_ENV == 'development' ? err.stack:{}
    })
}