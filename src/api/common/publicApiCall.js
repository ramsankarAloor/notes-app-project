import axios from "axios"
export async function publicApiCall(args){
        const apiResponse = await axios(args)
        localStorage.setItem("access_token", apiResponse.data.accessToken)
    }
