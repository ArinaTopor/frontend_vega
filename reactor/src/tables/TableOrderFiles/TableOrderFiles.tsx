import { FolderOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import styles from './TableOrderFiles.module.css';
import { Button, Flex } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
    useGetAllFilesByKKSQuery,
    useGetFileByNameQuery,
    getFileByName,
} from '../../app/services/orders';
import { useDispatch } from 'react-redux';
import { useGetFile } from '../../hooks';
import FilesReader from '../../components/FilesReader/FilesReader';
import { statuses } from '../../constans/statusData';
const TableOrderFiles = () => {
    const { id } = useParams();
    const { data, error } = useGetAllFilesByKKSQuery(id!);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        navigate(`/file/${path}`);
    };
    return (
        <Flex
            vertical
            style={{
                height: '100vh',
                marginLeft: '2.92vw',
                marginTop: '4.5vh',
            }}
        >
            <h1 className={styles.file_title}>
                <FolderOutlined />
                {id}
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
                <tbody>
                    {data &&
                        Object.keys(data).map((key) =>
                            data[key].files_info.map((file, index) => (
                                <tr key={index} className={styles.file}>
                                    <td onClick={() => handleClick(file.path)}>
                                        <span>{file.filename}</span>
                                    </td>
                                    <td>{formattedDate(file.upload_date)}</td>
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
            </table>
            <FilesReader
                path={'31SAM46AH552/Внесение входной документации/file.docx'}
                open={true}
            />
        </Flex>
    );
};
export default TableOrderFiles;
