import { FolderOutlined } from '@ant-design/icons';
import styles from './TableOrderFiles.module.css';
import { Flex } from 'antd';
import { useParams } from 'react-router';
const TableOrderFiles = () => {
    const { id } = useParams();
    return (
        <Flex vertical style={{ height: '100vh' }}>
            <h1 className={styles.file_title}>
                <FolderOutlined></FolderOutlined>Заголовок {id}
            </h1>
            <table className={styles.table_container}>
                <tr>
                    <th>Файл</th>
                    <th>Дата загрузки</th>
                    <th>Статус</th>
                </tr>
                <tr className={styles.file}>
                    <td>
                        <span>файл1</span>
                    </td>
                    <td>ddd</td>
                    <td>87788</td>
                </tr>
            </table>
        </Flex>
    );
};
export default TableOrderFiles;
