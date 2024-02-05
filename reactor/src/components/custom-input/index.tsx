import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { useState } from 'react';
type Props = {
    name: string;
    placeholder: string;
    requare?: boolean;
    type?: string;
    errors?: boolean;
};

const InputStyles = {
    size: 'sm',
    borderRadius: '2px',
    _focus: {
        borderColor: '#314659',
    },
    _invalid: { borderColor: 'red.500' },
};

export const CustomInput = ({
    name,
    placeholder,
    requare = false,
    type = 'text',
    errors = false,
}: Props) => {
    return (
        <FormControl isInvalid={errors}>
            <Input
                name={name}
                placeholder={placeholder}
                sx={InputStyles}
                focusBorderColor='#314659'
                type={type}
            ></Input>
            <FormErrorMessage>Обязательное поле</FormErrorMessage>
        </FormControl>
    );
};
