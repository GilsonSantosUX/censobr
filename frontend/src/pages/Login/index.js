import React, { useState, useContext, useEffect } from "react";
import { Text, HStack, Flex, Box, Image, Link, Input } from '@chakra-ui/react'
import { Context } from "../../context/index"

// import { Input } from "../../components/Input/index.js"
import { Button } from "../../components/Button";

import loginImg from "../../dist/login.svg"
import logo from "../../dist/logo.svg"
import iconFirstAcess from "../../dist/iconFirstAcess.svg"

export const Login = () => {

    const { authenticate, handleLogin, emailAndPasswordInvalid, setEmailAndPasswordInvalid } = useContext(Context);

    const [inputLogin, setInputLogin] = useState();
    const [inputPassword, setInputPassword] = useState();

    useEffect(() => {
        if (!authenticate) {
            return;
        } else {
            window.location.href = "/home"
        }

    }, [authenticate])


    const validLogin = (inputLogin, inputPassword) => {
        if (inputLogin && inputPassword) {
            handleLogin(inputLogin, inputPassword)
        } else {
            setEmailAndPasswordInvalid(false);
        }
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
                    <Text color="white">{"Usuário"}</Text>
                    <Input type={"text"} value={inputLogin} onChange={e => setInputLogin(e.target.value)} placeholder={"Informe o usuário ex: user@ufms.br"} bgColor="white" mb="20px" />
                </Box>
                <Box mb="72px">
                    <Text color="white">{"Senha"}</Text>
                    <Input type={"password"} value={inputPassword} onChange={e => setInputPassword(e.target.value)} placeholder={"Informe sua senha"} bgColor="white" mb="20px" />
                </Box>
                <Box mb="20px">
                    <Button activeButton={() => validLogin(inputLogin, inputPassword)} />
                    <Box>
                        {!emailAndPasswordInvalid && <Text>senha ou email incorretos</Text>}
                    </Box>
                </Box>
                <Flex w="full" justifyContent="center"><Link color="white" mr="5px">Cadastrar novo acesso</Link> <Image src={iconFirstAcess} /></Flex>

            </Box>
        </HStack>
    )
}