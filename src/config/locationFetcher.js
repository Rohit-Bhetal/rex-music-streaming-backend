import dotenv from 'dotenv';

dotenv.config();

const locationFetcher = async(ip)=>{
    const ipAdd = ip??''
    const locObj = await fetch(`http://api.ipapi.com/api/${ipAdd}?access_key=${process.env.IPAI_API}`);
    const data = await locObj.json()
    if (data){
        return data.country_code
    }
    return 'US'
}

export default locationFetcher