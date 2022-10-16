import { Button as ChakraButton } from "@chakra-ui/react"

export const Button = (props) => {

    const { activeButton, text } = props;
    return (
        <ChakraButton w="full" color="white" colorScheme='orange' onClick={() => activeButton()}>{text}</ChakraButton>
    )
}