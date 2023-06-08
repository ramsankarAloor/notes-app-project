import { publicApiCall } from "./common/publicApiCall";

async function handleLoginOrSignup(username, password, isLogin){
    const apiArgs = {
        url: `http://localhost:4000/public/${isLogin? 'login' : 'signup'}`,
        method: 'POST',
        data: {
            username,
            password
        }
    }
  await publicApiCall(apiArgs);

}

export default handleLoginOrSignup

