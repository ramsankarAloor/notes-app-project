import { privateApiCall } from "./common/privateApiCall"

export async function handleUpdates(updatedNote){
    const apiArgs = {
        url : `http://localhost:4000/private/note/${updatedNote.id}`,
        method : 'PUT',
        data : {
            title : updatedNote.title,
            note : updatedNote.note
        }
    }
    return await privateApiCall(apiArgs) 
}

export default handleUpdates