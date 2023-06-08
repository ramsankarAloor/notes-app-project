import axios from "axios";

export async function privateApiCall(args){
    const token = localStorage.getItem('access_token')
    const newArgs = {
        ...args,
        headers: {
            Authorization : token
        }
    }
    const apiResponse = await axios(newArgs)
    return apiResponse
}