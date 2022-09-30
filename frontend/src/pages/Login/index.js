import React, { useState } from "react";
import { Text, HStack, Flex, Box, Image, Link } from '@chakra-ui/react'

import { Input } from "../../components/Input/index.js"
import { Button } from "../../components/Button";

import loginImg from "../../dist/login.svg"
import logo from "../../dist/logo.svg"
import iconFirstAcess from "../../dist/iconFirstAcess.svg"

export const Login = () => {

    const [inputLogin, setInputLogin] = useState();
    const [inputPassword, setInputPassword] = useState();

    const action = () => {
        window.alert('oi')
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
                    <Input inputText={inputLogin} setInputText={setInputLogin} titleLabel={"Usuário"} placeHolder={"Informe o usuário ex: user@ufms.br"} mb="20px" />
                </Box>
                <Box mb="72px">
                    <Input type="password" inputText={inputPassword} setInputText={setInputPassword} titleLabel={"Senha"} placeHolder={"Informe sua senha"} />
                </Box>
                <Box mb="20px">
                    <Button activeButton={action} />
                </Box>
                <Flex w="full" justifyContent="center"><Link color="white" mr="5px">Cadastrar novo acesso</Link> <Image src={iconFirstAcess} /></Flex>
            </Box>
        </HStack>
    )
}