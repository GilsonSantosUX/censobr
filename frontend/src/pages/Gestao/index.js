import React, { useContext } from "react"

import {
    Button, Flex, Image, Text, Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer,
} from '@chakra-ui/react'
import { useMediaContext } from "../../hook/useMediaContext.js";
import { EditIcon, SmallAddIcon, DeleteIcon } from '@chakra-ui/icons'
import logo from "../../dist/logo-black.svg"
import { Papel } from "../../components/Papel/index.js";


export const Gestao = () => {
    const { isDesktop } = useMediaContext();

    function userLogout() {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }

    return (
        <>
            <Flex p="19px" borderBottom="solid 0.1px grey" justifyContent='space-between'>
                <Flex>
                    <Image src={logo} />
                </Flex>
                <Flex alignItems='center'>
                    <Text cursor="pointer" mx="15px">Dashboard</Text>
                    <Text cursor="pointer" mx="15px" color="#00A954" fontWeight="medium">Gestão</Text>
                    <Text cursor="pointer" mx="15px">Relatórios</Text>
                    <Text cursor="pointer" mx="15px">Saiba Mais</Text>
                </Flex>
                <Flex>
                    <Flex>
                        <Box>
                            <Text fontWeight='bold'>Sagun Adebayo</Text>
                            <Text>Entrevistador</Text>
                        </Box>
                        <Image
                            mx="12px"
                            borderRadius='full'
                            boxSize='40px'
                            src='https://cdn-icons-png.flaticon.com/512/74/74472.png'
                            alt='Icone user'
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Flex p="19px" borderBottom="solid 0.1px grey" justifyContent='center'>
                <Flex alignItems='center'>
                    <Text cursor="pointer" mx="15px">Pesquisa</Text>
                    <Text cursor="pointer" mx="15px" color="#00A954" fontWeight="medium">Usuário</Text>
                    <Text cursor="pointer" mx="15px">Papeis</Text>
                    <Text cursor="pointer" mx="15px">Regiões</Text>
                    <Text cursor="pointer" mx="15px">Endereços</Text>
                    <Text cursor="pointer" mx="15px">Bairros</Text>
                </Flex>
            </Flex>
            <Box p="19px" px="171px" py="33px">
                <Flex justifyContent='space-between' w="full" align="center" mb="30px">
                    <Text fontSize='20px'>Listagem de usuários</Text>
                    <Box>
                        <Button mr="10px" border='solid 1px grey' color="grey">Exportar  <EditIcon w={5} h={5} ml="10px" /></Button>
                        <Button bgColor="#00A954" color='white'>Novo <SmallAddIcon w={5} h={5} ml="5px" /></Button>
                    </Box>
                </Flex>
                <TableContainer border='solid 0.1px grey'>
                    <Table variant='simple' >
                        <Thead bgColor="grey" >
                            <Tr>
                                <Th color="white">Usuário</Th>
                                <Th color="white">Papel</Th>
                                <Th color="white">Supervisor</Th>
                                <Th color="white"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nome entrevistador</Text>
                                        <Text>jeremy@chakra-ui.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Papel color="red" textContent="MS" />
                                </Td>
                                <Td>Nome Supervisor</Td>
                                <Td w="30px">
                                    <Flex justifyContent="space-around">
                                        <EditIcon w={5} h={5} mr="10px" />
                                        <DeleteIcon w={5} h={5} ml="10px" color="red" />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nome entrevistador</Text>
                                        <Text>jeremy@chakra-ui.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Papel color="green" textContent="GG" />
                                </Td>
                                <Td>Nome Supervisor</Td>
                                <Td w="30px">
                                    <Flex justifyContent="space-around">
                                        <EditIcon w={5} h={5} mr="10px" />
                                        <DeleteIcon w={5} h={5} ml="10px" color="red" />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nome entrevistador</Text>
                                        <Text>jeremy@chakra-ui.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Papel color="yellow" textContent="GS" />
                                </Td>
                                <Td>Nome Supervisor</Td>
                                <Td w="30px">
                                    <Flex justifyContent="space-around">
                                        <EditIcon w={5} h={5} mr="10px" />
                                        <DeleteIcon w={5} h={5} ml="10px" color="red" />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nome entrevistador</Text>
                                        <Text>jeremy@chakra-ui.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Papel color="blue" textContent="ER" />
                                </Td>
                                <Td>Nome Supervisor</Td>
                                <Td w="30px">
                                    <Flex justifyContent="space-around">
                                        <EditIcon w={5} h={5} mr="10px" />
                                        <DeleteIcon w={5} h={5} ml="10px" color="red" />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nome entrevistador</Text>
                                        <Text>jeremy@chakra-ui.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Papel color="blue" textContent="ER" />
                                </Td>
                                <Td>Nome Supervisor</Td>
                                <Td w="30px">
                                    <Flex justifyContent="space-around">
                                        <EditIcon w={5} h={5} mr="10px" />
                                        <DeleteIcon w={5} h={5} ml="10px" color="red" />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nome entrevistador</Text>
                                        <Text>jeremy@chakra-ui.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Papel color="blue" textContent="ER" />
                                </Td>
                                <Td>Nome Supervisor</Td>
                                <Td w="30px">
                                    <Flex justifyContent="space-around">
                                        <EditIcon w={5} h={5} mr="10px" />
                                        <DeleteIcon w={5} h={5} ml="10px" color="red" />
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}