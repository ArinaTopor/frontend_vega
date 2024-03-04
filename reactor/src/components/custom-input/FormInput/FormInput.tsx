import { useState } from 'react';
import visible from '../../../assets/icons/visible.svg';
import notVisible from '../../../assets/icons/notVisible.svg';
import { Flex, Form, Image, Input,Typography } from 'antd';
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
		<>
		<Typography.Text className={style.label}>{label}</Typography.Text>
		<Form.Item
			name={name}
			className={style.inputForm}
			rules={[
				{
					required: required,
					message: 'Обязательное поле',
				},
			]}
		>
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
						defaultValue={value}
						onChange={onChange}
					/>
				</Flex>
			) : (
				<Input
					name={name}
					type={type}
					className={style.input}
					defaultValue={value}
					onChange={onChange}
				/>
			)}
		</Form.Item>
		</>
	);
};

export default FormInput;
