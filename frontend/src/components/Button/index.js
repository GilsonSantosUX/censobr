import { Button as ChakraButton } from "@chakra-ui/react"

export const Button = (props) => {

    const { activeButton } = props;
    return (
        <ChakraButton w="full" color="white" colorScheme='orange' onClick={() => activeButton()}>Acessar</ChakraButton>
    )
}