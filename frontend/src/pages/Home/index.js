import React, { useContext } from "react"

import { Button } from '@chakra-ui/react'
import { Context } from "../../context/index"


export const Home = () => {
    const { authenticate } = useContext(Context);


    function userLogout() {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }

    return (
        authenticate ?
            <>
                <Button onClick={() => { userLogout() }}>Deslogar</Button>
                <div>esta logado</div>
            </> : userLogout()
    )
}