import { privateApiCall } from "./common/privateApiCall"

export async function handleDelete(id){
    const apiArgs = {
        url : `http://localhost:4000/private/note/${id}`,
        method : 'DELETE',
    }
    return await privateApiCall(apiArgs) 
}

export default handleDelete