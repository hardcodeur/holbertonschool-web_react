import { createContext } from 'react';

export const user = {
    email : "",
    password : "",
    isLoggedIn : false
}

const logOut = () => {};

export const newContext = createContext({user,logOut})

