import React, { useState, useContext, useEffect } from "react";
import { Text, HStack, Flex, Box, Image, Link, Input, Select, Checkbox, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { UserContext } from "../../context/HandleUser"
import { formatCPF } from '@brazilian-utils/brazilian-utils';

import { Button } from "../../components/Button";
import { formatRg } from "../../helpers/format.js"
import registerImg from "../../dist/createUser.svg"
import logo from "../../dist/logo.svg"
import iconFirstAcess from "../../dist/iconFirstAcess.svg"
import { useMediaContext } from "../../hook/useMediaContext";
import { CreateUser } from "../../fetchers/CreateUser";

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
    const [error, setError] = useState(false);

    const { isDesktop } = useMediaContext();

    const handleSubmit = () => {
        if (inputName && cpf && rg && papel && supervisor && email && password && confirmPassword && handleCheckbox) {
            CreateUser(email, password, papel, supervisor, inputName, cpf, rg);
        } else {
            setError(true);
        }
    }

    return (
        <HStack h="100vh" justifyContent="space-between" >
            {isDesktop && <Flex w="726px" alignItems="center" justifyContent="center">
                <Image src={registerImg} w="480px" h="480px" />
            </Flex>}

            <Box w={isDesktop ? '640px' : 'full'} h="100vh" bgColor="#007F3F" p={isDesktop ? "50px" : '18px'}>
                <Box mb={isDesktop ? "20px" : '18px'}>
                    <Image src={logo} w="336px" h="56px" />
                </Box>
                <Box mb="20px">
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
                            <Input type={"text"} value={cpf} onChange={e => setCpf(formatCPF(e.target.value))} placeholder={"000.000.000-00"} bgColor="white" />
                        </Box>
                        <Box w='90%' ml='10px'>
                            <Text color="white">{"RG"}</Text>
                            <Input type={"text"} value={rg} onChange={e => setRg(formatRg(e.target.value))} placeholder={"00.000.000-0"} bgColor="white" />
                        </Box>
                    </Flex>
                </Box>
                <Flex justifyContent='space-between' mb="18px">
                    <Box w='90%' mr='10px'>
                        <Text color="white">{"Papel"}</Text>
                        <Select placeholder='Selecione seu papel' bgColor="white" cursor={'pointer'} onChange={e => setPapel(e.target.value)} value={papel}>
                            <option value='1'>Entrevistado</option>
                            <option value='2'>Entrevistador</option>
                            <option value='3'>Entrevistador</option>
                        </Select>
                    </Box>
                    <Box w='90%' ml='10px'>
                        <Text color="white">{"Supervisor"}</Text>
                        <Select placeholder='Selecione o supervisor da sua região' bgColor="white" cursor={'pointer'} onChange={e => setSupervisor(e.target.value)} value={supervisor}>
                            <option value='1'>Caique</option>
                            <option value='2'>Felipe</option>
                            <option value='3'>Pedro</option>
                            <option value='4'>Gustavo</option>
                            <option value='4'>Gustavo</option>
                        </Select>
                    </Box>
                </Flex>
                <Box mb="18px">
                    <Text color="white">{"E-mail"}</Text>
                    <Input type={"text"} value={email} onChange={e => setEmail(e.target.value)} placeholder={"Informe o e-mail"} bgColor="white" />
                </Box>
                <Box mb="18px">
                    <Text color="white">{"Senha"}</Text>
                    <Input type={"password"} value={password} onChange={e => setPassword(e.target.value)} placeholder={"Informe sua senha"} bgColor="white" />
                </Box>
                <Box mb={isDesktop ? "18px" : '40px'}>
                    <Text color="white">{"Confirme sua senha"}</Text>
                    <Input type={"password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder={"Confirme sua senha"} bgColor="white" />
                </Box>
                <Checkbox size='md' colorScheme='green' mb="18px" color="white" isChecked={handleCheckbox} onChange={(e) => { setHandleCheckBox(e.target.checked) }}>
                    Aceito os termos de uso (Link para os termos de uso)
                </Checkbox>
                <Box mb="18px">
                    <Button activeButton={() => handleSubmit()} text={'Enviar Convite de acesso'} />
                </Box>
                {error && <Alert status='error' mb="10px">
                    <AlertIcon />
                    <AlertTitle>Houve um erro!</AlertTitle>
                    <AlertDescription>Verifique o checkbox e seus dados</AlertDescription>
                </Alert>}
                <Flex w="full" justifyContent="center"><Link href="/login" color="white" mr="5px">Tenho Cadastro</Link> <Image src={iconFirstAcess} /></Flex>

            </Box>
        </HStack>
    )
}