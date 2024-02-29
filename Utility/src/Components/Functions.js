export const setCookie = (cookieKey, cookieValue) => {
    const cookie = `${cookieKey}=${cookieValue};`;
    const sameSiteCookie = `${cookieKey}-cors=${cookieValue};SameSite=None; Secure;`;
  
    document.cookie = cookie;
    document.cookie = sameSiteCookie;
  };
  export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };
  export const removeCookie = (cookieKey) => {
    const cookie = `${cookieKey}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    const sameSiteCookie = `${cookieKey}-cors=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    document.cookie = cookie;
    document.cookie = sameSiteCookie;
  };