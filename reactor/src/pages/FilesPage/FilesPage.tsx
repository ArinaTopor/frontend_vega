import { Flex, Typography } from 'antd';
import TableFiles from '../../components/tables/tableFiles/TableFiles';
import styles from './FilePage.module.css';
import { getDate } from '../../functions/dateFunc';
const FilesPage = () => {
    return (
        <Flex className={styles.page}>
            <Typography.Text className={styles.date}>
                {getDate()}
            </Typography.Text>
            <TableFiles />
        </Flex>
    );
};
export default FilesPage;
