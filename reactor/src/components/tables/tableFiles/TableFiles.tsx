import { FolderOutlined } from '@ant-design/icons';
import styles from './TableFiles.module.css';
import { Link } from 'react-router-dom';
import { useGetAllKKSQuery } from '../../../app/services/orders';

const TableFiles = () => {
    const { data } = useGetAllKKSQuery();
    return (
        <div className={styles.table_wrapper}>
            <table className={styles.orderfiles_table}>
                <thead>
                    <tr>
                        <th>Название</th>
                    </tr>
                </thead>
                <tbody className={styles.orderfiles_table_body}>
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
        </div>
    );
};
export default TableFiles;
