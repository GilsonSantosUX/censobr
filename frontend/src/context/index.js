import React, { createContext, useEffect, useState } from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react'
import { GetLogin } from "../fetchers/GetLogin.js"
import { GetAuthUser } from "../fetchers/GetAuthUser.js"

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticate, setAuthenticate] = useState(false);
    const [loading, setLoadingoading] = useState(true);
    const [emailAndPasswordInvalid, setEmailAndPasswordInvalid] = useState(true);

    useEffect(() => {
        (async () => {
            const auth = localStorage.getItem("token");
            if (auth) {
                const ok = await GetAuthUser(auth)
                ok.data ? setAuthenticate(true) : setAuthenticate(false);
            } else {
                setAuthenticate(false);
            }

            setLoadingoading(false);
        })()
    })

    async function handleLogin(email, password) {
        console.log("email", email)
        console.log("senha", password)
        const autorizationAuth = await GetLogin(email, password);
        console.log("auth", autorizationAuth)
        if (autorizationAuth) {
            localStorage.setItem("token", autorizationAuth.token)
            console.log("token", autorizationAuth.token)
            window.location.href = "/home"
        } else {
            setEmailAndPasswordInvalid(false);
        }
    }

    if (loading) {
        return (
            <Alert status='info' >
                <AlertIcon />
                Estamos verificando suas credenciais, Aguarde!
            </Alert >)
    }

    return (
        <Context.Provider value={{ authenticate, handleLogin, loading, emailAndPasswordInvalid, setEmailAndPasswordInvalid }}>
            {children}
        </Context.Provider>
    )
}


export { Context, AuthProvider };


