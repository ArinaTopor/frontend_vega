import { FormControl, Input } from '@chakra-ui/react';
type Props = {
    name: string;
    placeholder: string;
    requare?: boolean;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
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
    type = 'text',
    value,
    onChange,
}: Props) => {
    return (
        <FormControl>
            <Input
                name={name}
                placeholder={placeholder}
                sx={InputStyles}
                focusBorderColor='#314659'
                type={type}
                onChange={onChange}
                value={value}
            ></Input>
        </FormControl>
    );
};
