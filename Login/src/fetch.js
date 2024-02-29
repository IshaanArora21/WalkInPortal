import axios from 'axios'
import { publishLoginEvent } from './ReactStore/Store';
const CookieKeys = {
    JWT_TOKEN: "user_jwt_token"
};
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        const cookieValue = parts.pop().split(";").shift();
        console.log(`Value of cookie '${name}': ${cookieValue}`);
        return cookieValue;
    }
};
const getSessionData = async () => {

    const cookie = getCookie(CookieKeys.JWT_TOKEN)
    console.log(cookie)
    if (cookie) {
        const query = `
    query AuthenticateUser($jwt_token: String!) {
        authenticateUser(jwt_token: $jwt_token) {
          id
          guid
          first_name
          last_name
          email
          jwt_token
        }
      }
    `
        const variables = {
            jwt_token: cookie,
        }
        try {
            const response = await axios.post(
                "http://localhost:5000/graphql",
                {
                    query,
                    variables,
                },
                {
                    headers: {
                        "x-api-key": "dummy-api-key",
                    },
                }
            );
            const result=response.data.data.authenticateUser;
            if (result) {
                const userLoginDetails = {
                  isUserLoggedIn: true,
                  userDetails: result,
                };
                publishLoginEvent(userLoginDetails);
            }
        }
        catch (error) {
            console.error("Error in fetchData: &", error.message);
            throw new Error("Error fetching data");
        }
    }
    else {
        console.log('No cookie yet')
    }

}
export default getSessionData;