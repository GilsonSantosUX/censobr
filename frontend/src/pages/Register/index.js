import React, { useState, useContext, useEffect } from "react";
import { Text, HStack, Flex, Box, Image, Link, Input, Select } from '@chakra-ui/react'
import { UserContext } from "../../context/HandleUser"

import { Button } from "../../components/Button";

import registerImg from "../../dist/createUser.svg"
import logo from "../../dist/logo.svg"
import iconFirstAcess from "../../dist/iconFirstAcess.svg"
import { useMediaContext } from "../../hook/useMediaContext";

export const Register = () => {

    const { authenticate, emailAndPasswordInvalid } = useContext(UserContext);

    const [inputName, setInputName] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [papel, setPapel] = useState();
    const [supervisor, setSupervisor] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [handleCheckbox, setHandleCheckBox] = useState();

    const { isDesktop, isMobile } = useMediaContext();


    return (
        <HStack h="100vh" justifyContent="space-between" >
            {isDesktop && <Flex w="726px" alignItems="center" justifyContent="center">
                <Image src={registerImg} w="480px" h="480px" />
            </Flex>}

            <Box w={isDesktop ? '640px' : 'full'} h="100vh" bgColor="#007F3F" p={isDesktop ? "50px" : '18px'}>
                <Box mb={isDesktop ? "50px" : '18px'}>
                    <Image src={logo} w="336px" h="56px" />
                </Box>
                <Box mb="50px">
                    <Text fontSize="32px" fontWeight="bold" color="white">Novo usuário de acesso</Text>
                    <Text fontSize="18px" color="white" >Consulte uma pessoa com perfil de gestor para liberação do cadastro!</Text>
                </Box>
                <Box mb="18px">
                    <Text color="white">{"Nome"}</Text>
                    <Input type={"text"} value={inputName} onChange={e => setInputName(e.target.value)} placeholder={"Nome do usuário"} bgColor="white" />
                </Box>
                <Box mb="18px">
                    <Flex justifyContent='space-between'>
                        <Box w='90%' mr='10px'>
                            <Text color="white">{"CPF"}</Text>
                            <Input type={"text"} value={cpf} onChange={e => setCpf(e.target.value)} placeholder={"000.000.000-00"} bgColor="white" />
                        </Box>
                        <Box w='90%' ml='10px'>
                            <Text color="white">{"RG"}</Text>
                            <Input type={"text"} value={rg} onChange={e => setRg(e.target.value)} placeholder={"000.000-00"} bgColor="white" />
                        </Box>
                    </Flex>
                </Box>
                <Flex justifyContent='space-between' mb="18px">
                    <Box w='90%' mr='10px'>
                        <Text color="white">{"Papel"}</Text>
                        <Select placeholder='Selecione seu papel' bgColor="white" cursor={'pointer'} onChange={e => setPapel(e.target.value)} value={papel}>
                            <option value='entrevistado'>Entrevistado</option>
                            <option value='entrevistador'>Entrevistador</option>
                        </Select>
                    </Box>
                    <Box w='90%' ml='10px'>
                        <Text color="white">{"Supervisor"}</Text>
                        <Select placeholder='Selecione o supervisor da sua região' bgColor="white" cursor={'pointer'} onChange={e => setSupervisor(e.target.value)} value={supervisor}>
                            <option value='Caique'>Caique</option>
                            <option value='Felipe'>Felipe</option>
                            <option value='Pedro'>Pedro</option>
                            <option value='Gustavo'>Gustavo</option>
                        </Select>
                    </Box>
                </Flex>
                <Box mb="18px">
                    <Text color="white">{"E-mail"}</Text>
                    <Input type={"text"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"Informe o e-mail"} bgColor="white" />
                </Box>
                <Box mb="18px">
                    <Text color="white">{"Senha"}</Text>
                    <Input type={"password"} value={password} onChange={e => setConfirmPassword(e.target.value)} placeholder={"Informe sua senha"} bgColor="white" />
                </Box>
                <Box mb={isDesktop ? "18px" : '40px'}>
                    <Text color="white">{"Confirme sua senha"}</Text>
                    <Input type={"password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder={"Confirme sua senha"} bgColor="white" />
                </Box>
                <Box mb="18px">
                    <Button activeButton={() => console.log('oi')} text={'Enviar Convite de acesso'} />
                    <Box>
                        {!emailAndPasswordInvalid && <Text>Enviar Convite de Acesso</Text>}
                    </Box>
                </Box>
                <Flex w="full" justifyContent="center"><Link href="/login" color="white" mr="5px">Tenho Cadastro</Link> <Image src={iconFirstAcess} /></Flex>

            </Box>
        </HStack>
    )
}