import { Input as InputField, Text } from '@chakra-ui/react'

export const Input = (props) => {
    const { titleLabel, inputText, placeHolder, setInputText, type } = props;


    return (
        <>
            <Text color="white">{titleLabel}</Text>
            <InputField type={type ? type : "text"} value={inputText} onChange={e => setInputText(e.target.value)} placeholder={placeHolder} bgColor="white" />
        </>
    );
}