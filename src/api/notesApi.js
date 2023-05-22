import { privateApiCall } from "./common/privateApiCall"

async function handleNotes(){
    const apiArgs = {
        url : `http://localhost:4000/private/notes`,
        method : 'GET',
    }
    const response =  (await privateApiCall(apiArgs))
    return response.data.data 
}

export default handleNotes