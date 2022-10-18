import { Flex, Text } from "@chakra-ui/react"

export const Papel = (props) => {
    const { textContent, color } = props;


    return (
        <Flex>
            <Text bgColor={
                textContent == "GG" ? "green" : 
                textContent == "GS" ? "grey" : 
                textContent == "ER" ? "blue" : 
                textContent == "MS" ? "red"  : "green" } fontWeight="bold" color={"white"} p="5px">{textContent}</Text>
        </Flex>
    )
}