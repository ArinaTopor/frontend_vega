import { FolderOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './TableOrderFiles.module.css';
import { Flex } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { useGetAllFilesByKKSQuery } from '../../../app/services/orders';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { statuses } from '../../../constans/statusData';

const TableOrderFiles = () => {
    const { kks } = useParams();
    const { data, isLoading } = useGetAllFilesByKKSQuery(kks!);
    const navigate = useNavigate();
    const formattedDate = (date: Date) => {
        const nDate = new Date(date);
        const day = nDate.getDate().toString().padStart(2, '0');
        const month = (nDate.getMonth() + 1).toString().padStart(2, '0'); // добавляем 1, так как месяцы в JavaScript начинаются с 0
        const year = nDate.getFullYear();
        const formattedDate = `${day}.${month}.${year}`;
        return formattedDate;
    };
    const handleBack = () => {
        navigate('/files');
    };
    const handleClick = (path: string) => {
        const securePath = encodeURIComponent(path);
        navigate(`/file/${securePath}`);
    };
    return (
        <Flex vertical className={styles.page}>
            <h1 className={styles.file_title}>
                <FolderOutlined />
                {kks}
            </h1>
            <div className={styles.back_btn} onClick={handleBack}>
                <span>
                    <ArrowLeftOutlined style={{ marginRight: '1vw' }} />
                    Назад
                </span>
            </div>
            <table className={styles.table_container}>
                <thead>
                    <tr>
                        <th>Файл</th>
                        <th>Дата загрузки</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                {isLoading ? (
                    <tr>
                        <td
                            colSpan={3}
                            style={{
                                textAlign: 'center',
                            }}
                        >
                            <Spin
                                indicator={
                                    <LoadingOutlined
                                        style={{
                                            marginTop: '16px',
                                            fontSize: 36,
                                        }}
                                        spin
                                    />
                                }
                            />
                        </td>
                    </tr>
                ) : (
                    <tbody>
                        {data &&
                            Object.keys(data).map((key) =>
                                data[key].files_info.map((file, index) => (
                                    <tr key={index} className={styles.file}>
                                        <td
                                            onClick={() =>
                                                handleClick(file.path)
                                            }
                                        >
                                            <span>{file.filename}</span>
                                        </td>
                                        <td>
                                            {formattedDate(file.upload_date)}
                                        </td>
                                        <td
                                            className={
                                                file.status_id === 0
                                                    ? styles.file_status_wait
                                                    : file.status_id === 1
                                                    ? styles.file_status_positive
                                                    : styles.file_status_negative
                                            }
                                        >
                                            {statuses[file.status_id]}
                                        </td>
                                    </tr>
                                ))
                            )}
                    </tbody>
                )}
            </table>
        </Flex>
    );
};
export default TableOrderFiles;
