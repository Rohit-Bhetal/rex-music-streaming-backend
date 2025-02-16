import yts from 'yt-search'

export const youtubeSearch = async(req,res)=>{
    const search = req.query.search;
    if (!search){
        res.status(400).json({
            error:"Error No search Query"
        })
    }
    try {
    
    const result = await yts(search);
    const data=  result.videos.slice(0,7).map((video,_index)=>({
        _id:_index,
        title:video.title,
        imageUrl:video.thumbnail,
        audioUrl:video.url,
        duration:video.duration,
        source:'Youtube'
    }));
    res.status(200).send({
        data
    })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error:error.message
        })
    }

}

