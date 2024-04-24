import { useParams } from 'react-router-dom';
import styles from './FilePage.module.css';
const FilePage = () => {
    const params = useParams();

    return (
        <div>
            <iframe
                title={`${params.path?.split('/')[2]}`}
                className={styles.file}
                src={`https://localhost:7185/api/Order/files/?path=${params.path}`}
            ></iframe>
        </div>
    );
};
export default FilePage;
