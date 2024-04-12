import { useState } from "react"
import axios from "axios";

export const Crud=(Burl)=>{
    const [response, setresponse] = useState();
    const [error, setError] = useState(false)

    const getApi=(path)=>{
        const url=`${Burl}${path}`
        axios.get(url)
         .then(res=>{
            setresponse(res.data)
            setError(false)
        })
         .catch(err=>{
            setError(true)
            console.log(err)
        })
    }

    return [response, getApi,error];
}

export default Crud