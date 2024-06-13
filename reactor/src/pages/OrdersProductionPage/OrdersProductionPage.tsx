import { Flex, Typography } from 'antd';
import styles from './OrdersProductionPage.module.css';
import { getDate } from '../../functions/dateFunc';
import { WaitingList } from '../../components/WaitingList/WaitingList';
const OrdersProductionPage = () => {
    return (
        <Flex className={styles.page}>
            <Typography.Text className={styles.date}>
                {getDate()}
            </Typography.Text>
            <WaitingList place='production'/>
        </Flex>
    );
};
export default OrdersProductionPage;