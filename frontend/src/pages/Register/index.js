import React, { useState, useContext, useEffect } from "react";
import { Text, HStack, Flex, Box, Image, Link, Input } from '@chakra-ui/react'
import { Context } from "../../context/index"

// import { Input } from "../../components/Input/index.js"
import { Button } from "../../components/Button";

import registerImg from "../../dist/createUser.svg"
import logo from "../../dist/logo.svg"
import iconFirstAcess from "../../dist/iconFirstAcess.svg"

export const Register = () => {

    const { authenticate, emailAndPasswordInvalid } = useContext(Context);

    const [inputLogin, setInputLogin] = useState();
    const [inputPassword, setInputPassword] = useState();

    useEffect(() => {
        if (!authenticate) {
            return;
        } else {
            window.location.href = "/home"
        }

    }, [authenticate])

    return (
        <HStack h="100vh" >
            <Flex w="726px" alignItems="center" justifyContent="center">
                <Image src={registerImg} w="480px" h="480px" />
            </Flex>
            <Box w="640px" h="100vh" bgColor="#007F3F" p="50px">
                <Box mb="50px">
                    <Image src={logo} w="336px" h="56px" />
                </Box>
                <Box mb="50px">
                    <Text fontSize="32px" fontWeight="bold" color="white">Novo usuário de acesso</Text>
                    <Text fontSize="20px" color="white" >Consulte uma pessoa com perfil de gestor para liberação do cadastro!</Text>
                </Box>
                <Box mb="20px">
                    <Text color="white">{"Nome"}</Text>
                    <Input type={"text"} value={inputLogin} onChange={e => setInputLogin(e.target.value)} placeholder={"Informe seu nome"} bgColor="white" />
                </Box>
                <Box mb="20px">
                    <Text color="white">{"E-mail"}</Text>
                    <Input type={"text"} value={inputPassword} onChange={e => setInputPassword(e.target.value)} placeholder={"Informe o usuário ex: user@ufms.br"} bgColor="white" />
                </Box>
                <Box mb="20px">
                    <Text color="white">{"Hash do Gestor"}</Text>
                    <Input type={"password"} value={inputPassword} onChange={e => setInputPassword(e.target.value)} placeholder={"Informe a hash do seu gestor"} bgColor="white" />
                </Box>
                <Box mb="20px">
                    <Button activeButton={() => console.log('oi')} />
                    <Box>
                        {!emailAndPasswordInvalid && <Text>Enviar Convite de Acesso</Text>}
                    </Box>
                </Box>
                <Flex w="full" justifyContent="center"><Link href="/login" color="white" mr="5px">Tenho Cadastro</Link> <Image src={iconFirstAcess} /></Flex>

            </Box>
        </HStack>
    )
}