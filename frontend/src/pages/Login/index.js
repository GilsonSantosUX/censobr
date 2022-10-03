import React, { useState, useContext, useEffect } from "react";
import { Text, HStack, Flex, Box, Image, Link, Input } from '@chakra-ui/react'
import { Context } from "../../context/index"

// import { Input } from "../../components/Input/index.js"
import { Button } from "../../components/Button";

import loginImg from "../../dist/login.svg"
import logo from "../../dist/logo.svg"
import iconFirstAcess from "../../dist/iconFirstAcess.svg"

export const Login = () => {

    const { authenticate, handleLogin, getLogin } = useContext(Context);

    const [inputLogin, setInputLogin] = useState();
    const [inputPassword, setInputPassword] = useState();
    const [emailAndPasswordValid, setEmailAndPasswordValid] = useState(true);

    // useEffect(() => {
    //     if (!authenticate) {
    //         console.log("login", authenticate)
    //         return;
    //     } else {
    //         window.location.href = "/home"
    //     }

    // }, [authenticate])


    const validLogin = (inputLogin, inputPassword) => {
        handleLogin(inputLogin, inputPassword)
        // if (inputLogin && inputPassword) {
        //     handleLogin(inputLogin, inputPassword)
        // } else {
        //     setEmailAndPasswordValid(false);
        // }

    }

    return (
        <HStack h="100vh" >
            <Flex w="726px" alignItems="center" justifyContent="center">
                <Image src={loginImg} w="480px" h="480px" />
            </Flex>
            <Box w="640px" h="100vh" bgColor="#007F3F" p="50px">
                <Box mb="50px">
                    <Image src={logo} w="336px" h="56px" />
                </Box>
                <Box mb="50px">
                    <Text fontSize="32px" fontWeight="bold" color="white">Bem-vindo ao CensoUFMS</Text>
                    <Text fontSize="20px" color="white" >Valide suas credenciais para acessar.</Text>
                </Box>
                <Box mb="20px">
                    {/* <Input inputText={inputLogin} setInputText={setInputLogin} titleLabel={"Usuário"} placeHolder={"Informe o usuário ex: user@ufms.br"} /> */}
                    <Text color="white">{"Usuário"}</Text>
                    <Input type={"text"} value={inputLogin} onChange={e => setInputLogin(e.target.value)} placeholder={"Informe o usuário ex: user@ufms.br"} bgColor="white" mb="20px" />
                </Box>
                <Box mb="72px">
                    <Text color="white">{"Senha"}</Text>
                    <Input type={"password"} value={inputPassword} onChange={e => setInputPassword(e.target.value)} placeholder={"Informe sua senha"} bgColor="white" mb="20px" />
                </Box>
                <Box mb="20px">
                    <Button activeButton={() => validLogin(inputLogin, inputPassword)} />
                </Box>
                <Flex w="full" justifyContent="center"><Link color="white" mr="5px">Cadastrar novo acesso</Link> <Image src={iconFirstAcess} /></Flex>
                {!emailAndPasswordValid && <div>senha ou email incorretos</div>}
            </Box>
        </HStack>
    )
}