//import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { CommonResponse } from '../../app/services/employees';
import { Form, Select, Typography } from 'antd';
import style from './AddEmployeeSelect.module.css';

type Props = {
	name: string;
	placeholder?: string;
	required?: boolean;
	options: Array<{ value: number; label: string }>;
	label?: string;
};

const SelectStyles = {
	background: '#EBECEF',
	borderRadius: '0',
	h: '5.3vh',
	color: '#000',
	fontSize: '1.1vw',
	_focus: { border: '1px solid #4f5454' },
	_hover: { border: '1px solid #4f5454' },
};

export function AddEmployeeSelect({
	name,
	placeholder,
	required,
	options,
	label,
}: Props) {
	return (
		<Form.Item
			name={name}
			className={style.selectForm}
			rules={[
				{
					required: true,
					message: 'Обязательное поле',
				},
			]}
		>
			<Typography.Text className={style.label}>{label}</Typography.Text>
			<Select
				defaultActiveFirstOption={false}
				options={options}
				className={style.select}
			/>
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
            <Select
                sx={SelectStyles}
                placeholder={placeholder}
                required={required}
                name={name}
            >
                {Object.keys(options).map((optionKey, index) => (
                    <option key={index} value={optionKey}>
                        {options[optionKey]}
                    </option>
                ))}
            </Select>
        </FormControl>*/
	);
}
