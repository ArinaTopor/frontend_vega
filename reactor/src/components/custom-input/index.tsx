import { FormControl, Input } from "@chakra-ui/react"
import { useState } from "react";
type Props = {
    name: string,
    placeholder: string,
    requare?: boolean,
    type?: string,
}

const InputStyles = {
    size: 'sm',
    borderRadius: '2px',
    _focus: {
        borderColor: '#314659',
    } ,
};

export const CustomInput = ({name, placeholder, requare = false, type='text'} : Props) => {
    return(
        <FormControl>
            <Input name={name} placeholder={placeholder}sx={InputStyles} focusBorderColor="#314659" isRequired={requare} type={type}></Input>
        </FormControl>
    )
}