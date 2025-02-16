import ytdl from '@distube/ytdl-core';
import stream from 'stream';
export const streamYoutube = async (req, res) => {
    const videoUrl = req.query.url;

    if (!ytdl.validateURL(videoUrl)) {
        return res.status(400).json({ error: 'Invalid YT Link' });
    }

    try {
        res.setHeader('Content-Type', 'audio/mpeg'); 
        res.setHeader('Transfer-Encoding', 'chunked');

        const audioStream = ytdl(videoUrl, {
            filter: 'audioonly',
            quality: 'highestaudio'
        });

        audioStream.pipe(res);
    } catch (err) {
        console.error('YouTube stream error:', err);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
};
