import { privateApiCall } from "./common/privateApiCall";

export async function handleCreate(title, note) {
  const apiArgs = {
    url: `http://localhost:4000/private/note`,
    method: "POST",
    data: {
      title,
      note,
    },
  };
  return await privateApiCall(apiArgs);
}

export default handleCreate;
