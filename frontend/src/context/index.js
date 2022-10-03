import React, { createContext, useEffect, useState } from 'react';
import { GetLogin } from "../fetchers/GetLogin.js"
import { GetAuthUser } from "../fetchers/GetAuthUser.js"

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticate, setAuthenticate] = useState(false);
    const [loading, setLoadingoading] = useState(true);

    useEffect(() => {
        const auth = localStorage.getItem("token");
        console.log("auth", auth)

        if (auth) {
            console.log("auth get", GetAuthUser(auth));
            setAuthenticate(true);
        }

        setLoadingoading(false);
    }, [])

    async function handleLogin(email, password) {
        const autorizationAuth = await GetLogin(email, password);
        console.log(autorizationAuth.token)
        localStorage.setItem("token", autorizationAuth.token)
        window.location.href = "/home"
    }

    if (loading) {
        <h1>carregando....</h1>
    }

    return (
        <Context.Provider value={{ authenticate, handleLogin, loading }}>
            {children}
        </Context.Provider>
    )
}


export { Context, AuthProvider };


