import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import styles from './TableFiles.module.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetAllKKSQuery } from '../app/services/orders';
interface DataType {
    key: number | string;
    orderName: string;
}
const columns: TableColumnsType<DataType> = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'orderName',
    },
];
const data2: DataType[] = [
    {
        key: 1,
        orderName: '30SAM46AH501',
    },
    {
        key: 2,
        orderName: '30SAM46AH308',
    },
    {
        key: 3,
        orderName: '09SAM54AH598',
    },
    {
        key: 4,
        orderName: '80SAM46AH560',
    },
];

const TableFiles = () => {
    const { data, error } = useGetAllKKSQuery();
    useEffect(() => {});
    return (
        <div>
            <table className={styles.orderfiles_table}>
                <thead>
                    <tr>
                        <th>Название</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        Object.keys(data).map((child) => (
                            <tr key={child} className={styles.order_file}>
                                <td>
                                    <FolderOutlined
                                        style={{
                                            marginRight: '1.77vw',
                                            color: '#2D3748',
                                            fontSize: '1.6vw',
                                        }}
                                    />
                                    <Link
                                        to={`/files/${data[child]}`}
                                        style={{ color: '#2D3748' }}
                                    >
                                        <span>{data[child]}</span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            {/* <Table
                dataSource={data2}
                style={{ width: '67.71vw', boxShadow: ' 0 0 5px 2px #E2E8F0' }}
            >
                <Column
                    title='Название'
                    dataIndex='orderName'
                    key='orderName'
                    render={(text, record) => (
                        <span
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                textAlign: 'center',
                                fontSize: '1.2vw',
                                color: '#2D3748',
                                fontWeight: '500',
                            }}
                        >
                            <FolderOutlined
                                style={{
                                    marginRight: '8px',
                                    color: '#2D3748',
                                    fontSize: '1.6vw',
                                }}
                            />
                            {text}
                        </span>
                    )}
                />
            </Table> */}
        </div>
    );
};
export default TableFiles;
