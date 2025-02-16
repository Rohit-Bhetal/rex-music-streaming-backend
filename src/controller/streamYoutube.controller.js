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
        const cookies =[
            [
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540497,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "__Secure-1PAPISID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "7JPxRlw8jjL_tQ4i/AjMPHlH7V756WZald",
                    "id": 1
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540569,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-1PSID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "g.a000twib7yDPPeNz_iW2W02QHgwMwg0ohzyjDS5nCyD6y4ngAaoYNs0cXe1Uqak9Xg5S3Be7WAACgYKAR0SARUSFQHGX2Mie-dH_3Z8eXOmgtorrc3HTBoVAUF8yKrMK1zKdMxuALkeJs7h3kRR0076",
                    "id": 2
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1771230263.761289,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-1PSIDCC",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "AKEyXzVD9il4RnneoiDhgVmVR3n8B_XJm8115qiG2_dj8a6-Bg_S8hzfYOSy3Eug2Qg2aVJnOQ",
                    "id": 3
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1771230254.540258,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-1PSIDTS",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "sidts-CjEBEJ3XV5dyn4fgTruVaR2VFmU3ZNJpn3PmJ6FJMrXaCBlLtlVQ8EXTGc36GLtK11g8EAA",
                    "id": 4
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540517,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "__Secure-3PAPISID",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "7JPxRlw8jjL_tQ4i/AjMPHlH7V756WZald",
                    "id": 5
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540597,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-3PSID",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "g.a000twib7yDPPeNz_iW2W02QHgwMwg0ohzyjDS5nCyD6y4ngAaoYzScUe1OPlxV2U52iCy7l5wACgYKAT0SARUSFQHGX2MiGQi-NHJjv87Ju7X1ZlAw7RoVAUF8yKq-wsxH5GdkEb3FDQMgsRiJ0076",
                    "id": 6
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1771230263.761325,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-3PSIDCC",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "AKEyXzXZfaRXREkTn8cPbbgyPhkCkqBr1SRk1m03Nw71j9iOAQugo2_hC-PsoA3VN5B5m1D6zJ3b",
                    "id": 7
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1771230254.540382,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "__Secure-3PSIDTS",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "sidts-CjEBEJ3XV5dyn4fgTruVaR2VFmU3ZNJpn3PmJ6FJMrXaCBlLtlVQ8EXTGc36GLtK11g8EAA",
                    "id": 8
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540459,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "APISID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "FSWnrLZ-xalcwIXg/AwU7AMQgQkih1Y0Ko",
                    "id": 9
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1739695926.409038,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "GPS",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "1",
                    "id": 10
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540415,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "HSID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "ATEwecslwSAixjvL5",
                    "id": 11
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254255.119575,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "LOGIN_INFO",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "AFmmF2swRQIhAK0LfQ4f4p_Vw7F0k_S2okgz4hY_Bi4GV-XG_ju-UVY8AiByV0Xy2lhC6vq4ljvOzclKOZVCFCzqH-PjDno5-U_irw:QUQ3MjNmd05rSGNkalByWmhMQ0R0Rk5vV0RZZFl6ZExkUWZVOTI2Y2RMak9RTEhoN1haSUkxalVoS0g2LTRZYkRUaUFEOGpyQlI1Yzg1WW9XTFZZQjk4ekM5Umx3MURqWkMyaGZSbDJtc2hRNHlwSlpQTTV1NmwxaDhBTUFNX3RXU1FmR2dGdm9DVFJWa2VoYnNDek0tTXM2ZE9JaVZTTlBn",
                    "id": 12
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254259.024936,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "PREF",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "f4=4000000&f6=40000000&tz=Asia.Calcutta&f5=20000&f7=140",
                    "id": 13
                },
                {
                    "domain": ".youtube.com",
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "S",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": true,
                    "storeId": "0",
                    "value": "youtube_lounge_remote=q7pP5VaN5a9IsEOtcV33HPzS5tWQG3mca-CUkrZH91c",
                    "id": 14
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540479,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "SAPISID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "7JPxRlw8jjL_tQ4i/AjMPHlH7V756WZald",
                    "id": 15
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.540547,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "SID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "g.a000twib7yDPPeNz_iW2W02QHgwMwg0ohzyjDS5nCyD6y4ngAaoYZk7vAVF9bHkRautrHITVfwACgYKAZASARUSFQHGX2MirKT5DP05fh2ia-YTroW29hoVAUF8yKo0E5jt_kr_Z4_6WQUx6SKE0076",
                    "id": 16
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1771230263.761195,
                    "hostOnly": false,
                    "httpOnly": false,
                    "name": "SIDCC",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": false,
                    "session": false,
                    "storeId": "0",
                    "value": "AKEyXzVbuLbN1XDZFDyl_Zn6axPQ2rsG1KlM3LIHOZKkAZkUC8w2FVLx2tLOMpwFX9SgRzzDCA",
                    "id": 17
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1774254254.54044,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "SSID",
                    "path": "/",
                    "sameSite": "unspecified",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "ALysy7ENjvitKIEMm",
                    "id": 18
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1755246262.63781,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "VISITOR_INFO1_LIVE",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "1fZv_7iZ8i8",
                    "id": 19
                },
                {
                    "domain": ".youtube.com",
                    "expirationDate": 1755246262.637936,
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "VISITOR_PRIVACY_METADATA",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": false,
                    "storeId": "0",
                    "value": "CgJOUBIEGgAgJg%3D%3D",
                    "id": 20
                },
                {
                    "domain": ".youtube.com",
                    "hostOnly": false,
                    "httpOnly": true,
                    "name": "YSC",
                    "path": "/",
                    "sameSite": "no_restriction",
                    "secure": true,
                    "session": true,
                    "storeId": "0",
                    "value": "MltOoz1e9ZA",
                    "id": 21
                }
                ]
        ];
        const agentOptions = {
            pipelining: 5,
            maxRedirections: 0,
            localAddress: "127.0.0.1",
          };
          const agent = ytdl.createAgent(cookies, agentOptions);
        const audioStream = ytdl(videoUrl, {
            filter: 'audioonly',
            quality: 'highestaudio'
        },{agent});

        audioStream.pipe(res);
    } catch (err) {
        console.error('YouTube stream error:', err);
        res.status(500).json({ error: 'Server error', details: err.message });
    }
};
