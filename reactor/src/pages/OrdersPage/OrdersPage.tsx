import plus from '../../assets/icons/plus.svg';
import { useEffect, useState } from 'react';
import { Button, Flex, Popover, Typography, Image, Spin } from 'antd';
import styles from './OrdersPage.module.css';
import { ModalAddOrder } from '../../components/modals/ModalAddOrder/ModalAddOrder';
import TableOrders from '../../components/tables/tableOrder/TableOrders';
import { useGetStatQuery } from '../../app/services/orders';
import { WaitingList } from '../../components/WaitingList/WaitingList';
import OrderStatistics from '../../components/statistics/stat';
import { LoadingOutlined } from '@ant-design/icons';
import { getDate } from '../../functions/Date';

export const OrdersPage = () => {
    const [open, setOpen] = useState(false);
    const { data: dataStat, isLoading } = useGetStatQuery();
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        if (dataStat) {
            setDataLoaded(true);
        }
    }, [dataStat]);

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
            ) : dataLoaded && dataStat ? (
                <>
                    <TableOrders /> <OrderStatistics stat={dataStat} />
                </>
            ) : (
                <WaitingList />
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
                <Button
                    className={styles.buttonPlus}
                    onClick={() => setOpen(true)}
                >
                    <Image src={plus} preview={false} />
                </Button>
            </Popover>
            <ModalAddOrder open={open} setOpen={setOpen} />
        </Flex>
    );
};
