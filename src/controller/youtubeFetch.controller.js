import yts from 'yt-search'

export const youtubeFetch = async(req,res)=>{
    try {
    
    const result = await yts('Top 100 trending songs');
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

