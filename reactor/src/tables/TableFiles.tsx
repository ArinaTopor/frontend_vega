import type { TableColumnsType, TableProps } from 'antd';
import { Table } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import styles from './TableFiles.module.css';
import { useNavigate } from 'react-router';

const { Column } = Table;
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
        orderName: '30SAM46AH501',
    },
    {
        key: 3,
        orderName: '30SAM46AH501',
    },
    {
        key: 4,
        orderName: '30SAM46AH501',
    },
];

const TableFiles = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/files');
    };
    return (
        <div>
            <table className={styles.orderfiles_table}>
                <tr>
                    <th>Название</th>
                </tr>
                {data2.map((child) => (
                    <tr
                        key={child.key}
                        className={styles.order_file}
                        onClick={handleClick}
                    >
                        <td>
                            <FolderOutlined
                                style={{
                                    marginRight: '1.77vw',
                                    color: '#2D3748',
                                    fontSize: '1.6vw',
                                }}
                            />
                            <span>{child.orderName}</span>
                        </td>
                    </tr>
                ))}
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
