import { Form, Select, Typography } from 'antd';
import style from './CustomSelect.module.css';

type Props = {
    name: string;
    placeholder?: string;
    required?: boolean;
    options: Array<{ value: number; label: string }>;
    label?: string;
    disabled?: boolean;
};

export function CustomSelect({
    name,
    placeholder,
    required,
    options,
    label,
    disabled,
}: Props) {
    return (
        <>
            <Typography.Text className={style.label}>{label}</Typography.Text>
            <Form.Item
                name={name}
                className={style.selectForm}
                rules={[
                    {
                        required: required && !disabled,
                        message: 'Обязательное поле',
                    },
                ]}
            >
                <Select options={options} className={style.select} disabled={disabled}/>
            </Form.Item>
        </>
    );
}
