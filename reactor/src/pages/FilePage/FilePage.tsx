import { useParams } from 'react-router-dom';
import styles from './FilePage.module.css';
import { useEffect, useState } from 'react';
const FilePage = () => {
    const params = useParams();
    const headers = new Headers();
    const [url, setUrl] = useState('');
    headers.append(
        'Authorization',
        `Bearer ${localStorage.getItem('accessToken')}`
    );
    const loadDataIntoIframe = () => {
        fetch(`https://localhost:7185/api/Order/files/?path=${params.path}`, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => response.blob()) // Получаем содержимое как Blob
            .then((blob) => {
                setUrl(URL.createObjectURL(blob)); // Создаем URL для Blob
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    };
    useEffect(() => {
        loadDataIntoIframe();
    }, []);
    // loadDataIntoIframe();
    return (
        <div>
            <iframe
                title={`${params.path?.split('/')[2]}`}
                className={styles.file}
                src={url}
            ></iframe>
        </div>
    );
};
export default FilePage;
