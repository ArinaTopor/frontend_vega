import plus from '../../assets/icons/plus.svg';
import { useEffect, useState } from 'react';
import { Button, Flex, Popover, Typography, Image, Spin } from 'antd';
import styles from './OrdersPage.module.css';
import { ModalAddOrder } from '../../components/modals/ModalAddOrder/ModalAddOrder';
import TableOrders from '../../components/tables/tableOrders/TableOrders';
import {
    useGetInfoOrdersQuery,
    useGetStatQuery,
} from '../../app/services/orders';
import { WaitingList } from '../../components/WaitingList/WaitingList';
import OrderStatistics from '../../components/statistics/stat';
import { LoadingOutlined } from '@ant-design/icons';
import { getDate } from '../../functions/dateFunc';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/authSlice';
export const OrdersPage = () => {
    const [open, setOpen] = useState(false);
    const { data: dataStat, isLoading } = useGetStatQuery();
    const { data: orderData } = useGetInfoOrdersQuery(1);
    const [dataLoaded, setDataLoaded] = useState(false);
    const user = useSelector(selectUser);
    useEffect(() => {
        if (dataStat) {
            setDataLoaded(true);
        }
    }, [dataStat, orderData]);
    return (
        <Flex className={styles.page}>
            <Typography.Text className={styles.date}>
                {getDate()}
            </Typography.Text>
            {isLoading && !dataLoaded ? (
                <Spin
                    style={{ margin: 'auto' }}
                    indicator={
                        <LoadingOutlined style={{ fontSize: 24 }} spin />
                    }
                />
            ) : orderData && Object.keys(orderData).length > 0 ? (
                <>
                    <TableOrders />
                    {user && Object.keys(user.privileges).includes('2') && (
                        <OrderStatistics />
                    )}
                </>
            ) : (
                <WaitingList place='orders'/>
            )}
            <Popover
                placement='leftTop'
                trigger='hover'
                content={
                    <Flex
                        align='center'
                        justify='center'
                        className={styles.popover}
                    >
                        Создать новый заказ
                    </Flex>
                }
            >
                {user && Object.keys(user.privileges).includes('15') && (
                    <Button
                        className={styles.buttonPlus}
                        onClick={() => setOpen(true)}
                    >
                        <Image src={plus} preview={false} />
                    </Button>
                )}
            </Popover>
            <ModalAddOrder open={open} setOpen={setOpen} />
        </Flex>
    );
};
