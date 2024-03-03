import { Checkbox } from 'antd';
import { useState } from 'react';
import styles from './tableOrders.module.css';
import { MinusSquareFilled } from '@ant-design/icons';
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
];

const TableOrders = () => {
    const [show, setSwow] = useState(false);

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
                    {data.map((item) => (
                        <>
                            <tr>
                                <td
                                    style={{
                                        display: 'flex',
                                        gap: '2vw',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        margin: '2vw 0',
                                    }}
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
                                            !show
                                                ? styles.burger
                                                : `${styles.burger} ${styles.active}`
                                        }
                                        onClick={() => setSwow(!show)}
                                    ></button>
                                    <p>{item.name}</p>
                                </td>
                                <td></td>
                            </tr>
                            {item.children?.map((child) => (
                                <tr
                                    className={
                                        show
                                            ? styles.hidden
                                            : `${styles.fadeInDown} ${styles.active2}`
                                    }
                                    key={child.key}
                                >
                                    <td
                                        style={{
                                            paddingLeft: '6vw',
                                            paddingBottom: '1vw',
                                        }}
                                    >
                                        <Checkbox
                                            checked={child.checked}
                                            style={{ fontSize: '16px' }}
                                        >
                                            {child.name}
                                        </Checkbox>
                                    </td>
                                    <td
                                        style={{
                                            paddingBottom: '1vw',
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
        </>
    );
};
export default TableOrders;
