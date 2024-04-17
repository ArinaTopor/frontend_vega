import { Card, Flex } from 'antd';
import styles from './stat.module.css';

const OrderStatistics = () => {
    return (
        <Flex
            style={{
                background: '#d9d9d9',
                width: '18.5vw',
                borderRadius: '11px',
                padding: '0.6vw 0',
            }}
        >
            <Flex className={styles.stat_container}>
                <Card className={styles.stat_card}>
                    <h1>8</h1>
                    <p>title</p>
                </Card>
                <Card className={styles.stat_card}>
                    <h1>8</h1>
                    <p>title</p>
                </Card>
                <Card className={styles.stat_card}>
                    <h1>8</h1>
                    <p>title</p>
                </Card>
                <Card className={styles.stat_card}>
                    <h1>8</h1>
                    <p>title</p>
                </Card>
            </Flex>
        </Flex>
    );
};
export default OrderStatistics;
