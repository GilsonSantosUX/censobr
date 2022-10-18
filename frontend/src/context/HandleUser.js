import React, { createContext, useEffect, useState } from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react'
import { GetLogin } from "../fetchers/GetLogin.js"
import { GetAuthUser } from "../fetchers/GetAuthUser.js"

const UserContext = createContext();

function AuthProvider({ children }) {
    const [authenticate, setAuthenticate] = useState();
    const [loading, setLoadingoading] = useState(true);
    const [emailAndPasswordInvalid, setEmailAndPasswordInvalid] = useState(true);

    useEffect(() => {
        (async () => {
            const auth = localStorage.getItem("token");
            if (auth) {
                const ok = await GetAuthUser(auth)
                ok.data ? setAuthenticate(true) : setAuthenticate(false);
                setLoadingoading(false);
            } else {

                setLoadingoading(false);
            }
        })()
    }, [authenticate])

    async function handleLogin(email, password) {
        setAuthenticate(true);
        const autorizationAuth = await GetLogin(email, password);
        console.log(autorizationAuth)
        if (autorizationAuth.status === 200) {
            let responseJson = await autorizationAuth.json();
            localStorage.setItem("token", responseJson.token);
            localStorage.setItem("userId", responseJson.idusuario);
            window.location.href = "/gestao"
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
        <UserContext.Provider value={{ authenticate, handleLogin, loading, emailAndPasswordInvalid, setEmailAndPasswordInvalid }}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext, AuthProvider };


