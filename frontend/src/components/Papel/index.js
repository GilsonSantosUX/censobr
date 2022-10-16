import { Flex, Text } from "@chakra-ui/react"

export const Papel = (props) => {
    const { textContent, color } = props;
    return (
        <Flex>
            <Text bgColor={color} fontWeight="bold" color="white" p="5px">{textContent}</Text>
        </Flex>
    )
}