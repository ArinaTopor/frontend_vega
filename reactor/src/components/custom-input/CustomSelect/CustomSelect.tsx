import { Form, Select, Typography } from 'antd';
import style from './CustomSelect.module.css';

type Props = {
    name: string;
    placeholder?: string;
    required?: boolean;
    options: Array<{ value: number; label: string }>;
    label?: string;
};

export function AddEmployeeSelect({
    name,
    placeholder,
    required,
    options,
    label,
}: Props) {
    return (
        <>
            <Typography.Text className={style.label}>{label}</Typography.Text>
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
                <Select options={options} className={style.select} />
            </Form.Item>
        </>
    );
}
