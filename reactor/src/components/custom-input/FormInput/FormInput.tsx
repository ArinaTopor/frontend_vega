import { useState } from 'react';
//import { FormControl, Input, Image, Box, FormLabel } from '@chakra-ui/react';
import visible from '../../../assets/icons/visible.svg';
import notVisible from '../../../assets/icons/notVisible.svg';
import { Flex, Form, Image, Input, Space, Typography } from 'antd';
import style from './FormInput.module.css';

type Props = {
	name: string;
	placeholder?: string;
	required?: boolean;
	type?: string;
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
};

const FormInput = ({ name, type, required, label, value, onChange }: Props) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Form.Item
			name={name}
			className={style.inputForm}
		>
			<Typography.Text className={style.label}>{label}</Typography.Text>
			{type === 'password' ? (
				<Flex vertical className={style.wrapperInputPassword}>
					<Flex className={style.visible}>
						<Image
							src={!isVisible ? notVisible : visible}
							width="4vh"
							onClick={() => {
								setIsVisible(!isVisible);
							}}
							preview={false}
						/>
					</Flex>
					<Input
						name={name}
						type={isVisible ? 'text' : 'password'}
						className={style.input}
						value={value}
						onChange={onChange}
					/>
				</Flex>
			) : (
				<Input
					name={name}
					type={type}
					className={style.input}
					value={value}
					onChange={onChange}
				/>
			)}
		</Form.Item>
		/*<FormControl mb='1.8vh' width='90%'>
            <FormLabel
                fontSize='1.1vw'
                fontWeight='500'
                mb='1.8vh'
                color='#000'
            >
                {label}
            </FormLabel>
            {type === 'password' ? (
                <Box position='relative'>
                    <Image
                        src={!isVisible ? notVisible : visible}
                        pos='absolute'
                        zIndex='2'
                        w='2.3vw'
                        right='1.35vw'
                        top='0.6vh'
                        cursor='pointer'
                        onClick={() => {
                            setIsVisible(!isVisible);
                        }}
                    />
                    <Input
                        name={name}
                        type={isVisible ? 'text' : 'password'}
                        sx={InputStyles}
                        required={required}
                        value={value}
                        onChange={onChange}
                    />
                </Box>
            ) : (
                <Input
                    name={name}
                    type={type}
                    sx={InputStyles}
                    required={required}
                    value={value}
                    onChange={onChange}
                />
            )}
        </FormControl>*/
	);
};

export default FormInput;
