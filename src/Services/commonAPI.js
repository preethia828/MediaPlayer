import axios from "axios";

const commonAPI=async(httpMethod,url,reqBody)=>{
  
    const reqConfig={

        method:httpMethod,
        url:url, //if key and value is same then can use as url, ie, not url:url
        data:reqBody
    }

   return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI