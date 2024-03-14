import { Checkbox } from 'antd';
import { useState } from 'react';
import styles from './tableOrders.module.css';
import { MinusSquareFilled } from '@ant-design/icons';
import OrderStatistics from '../stat';
interface DataType {
    key: number | string;
    name: string;
    responsible: string;
    checked?: boolean;
    children?: DataType[];
}

const data: DataType[] = [
    {
        key: 1,
        name: '6373ggy37ghdbbh',
        responsible: '',
        checked: false,
        children: [
            {
                key: 2,
                name: 'Технические данные и т.д',
                responsible: 'admin1',
                checked: true,
            },
            {
                key: 3,
                name: 'Разработка КД',
                responsible: 'admin2',
                checked: true,
            },
            {
                key: 4,
                name: 'Согласование КД',
                responsible: 'admin3',
                checked: false,
            },
            {
                key: 5,
                name: 'Отдел поставки',
                responsible: 'admin4',
            },
        ],
    },
    {
        key: 90,
        name: '984hhebejejb',
        responsible: '',
        checked: false,
        children: [
            {
                key: 8,
                name: 'Технические данные и т.д',
                responsible: 'admin1',
                checked: true,
            },
            {
                key: 9,
                name: 'Разработка КД',
                responsible: 'admin2',
                checked: true,
            },
            {
                key: 10,
                name: 'Согласование КД',
                responsible: 'admin3',
                checked: false,
            },
            {
                key: 11,
                name: 'Отдел поставки',
                responsible: 'admin4',
            },
        ],
    },
];

const TableOrders = () => {
    const [visible, setVisible] = useState(data.map(() => false));

    const toggleVisibility = (index: number) => {
        setVisible((prevState) =>
            prevState.map((state, idx) => (idx === index ? !state : state))
        );
    };

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Ответственный</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <>
                            <tr>
                                <td
                                    className={styles.child_table}
                                    key={item.key}
                                >
                                    <MinusSquareFilled
                                        style={{
                                            color: '#4A505C',
                                            fontSize: '20px',
                                        }}
                                    />
                                    <button
                                        className={
                                            visible[index]
                                                ? `${styles.open_btn} ${styles.active}`
                                                : styles.open_btn
                                        }
                                        onClick={() => toggleVisibility(index)}
                                    ></button>
                                    <p>{item.name}</p>
                                </td>
                                <td></td>
                            </tr>
                            {item.children?.map((child) => (
                                <tr
                                    className={
                                        visible[index]
                                            ? `${styles.fadeInDown} ${styles.active2}`
                                            : styles.hidden
                                    }
                                    key={child.key}
                                >
                                    <td
                                        style={{
                                            paddingLeft: '6vw',
                                            paddingBottom: '1vh',
                                        }}
                                    >
                                        <Checkbox checked={child.checked}>
                                            {child.name}
                                        </Checkbox>
                                    </td>
                                    <td
                                        style={{
                                            paddingBottom: '1vh',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {child.responsible}
                                    </td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
            <OrderStatistics />
        </>
    );
};
export default TableOrders;
