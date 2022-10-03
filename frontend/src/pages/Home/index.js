import React, { useContext } from "react"
import { Context } from "../../context/index"


export const Home = () => {
    const { authenticate } = useContext(Context);

    return (
        authenticate ? <div>esta logado</div> : <div>deslogado</div>
    )
}