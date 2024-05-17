import { useParams } from 'react-router-dom';
import styles from './FilePage.module.css';
import { useEffect, useState } from 'react';
import { loadDataIntoIframe, loadDocFile } from '../../functions/fetchFiles';
const FilePage = () => {
    const params = useParams();
    const formatFile = params.path?.split('/')[2].split('.')[1];
    const [url, setUrl] = useState('');
    useEffect(() => {
        const openFileInNewTab = async () => {
            if (
                (formatFile === 'docx' || formatFile === 'doc') &&
                params.path
            ) {
                const fileUrl = await loadDocFile(params.path);
                window.open(fileUrl, '_blank');
            } else if (params.path) {
                const fileUrl = await loadDataIntoIframe(params.path);
                window.open(fileUrl, '_blank');
            }
        };

        openFileInNewTab();
    }, [formatFile, params]);
    return (
        <div>
            <a
                href={url}
                className={styles.file}
                target='_blank'
                rel='noopener noreferrer'
            >
                Open File
            </a>
            {/* <iframe
                title={`${params.path?.split('/')[2]}`}
                className={styles.file}
                src={url}
            ></iframe> */}
        </div>
    );
};
export default FilePage;
