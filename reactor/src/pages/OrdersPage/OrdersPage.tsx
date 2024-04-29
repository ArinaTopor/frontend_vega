import plus from '../../assets/icons/plus.svg';
import { useEffect, useState } from 'react';
import { Button, Flex, Popover, Typography, Image, Spin } from 'antd';
import style from './OrdersPage.module.css';
import { ModalAddOrder } from '../../components/modals/ModalAddOrder/ModalAddOrder';
import TableOrders from '../../components/tables/TableOrders';
import { useGetStatQuery } from '../../app/services/orders';
import { WaitingList } from '../../components/WaitingList/WaitingList';
import OrderStatistics from '../../components/statistics/stat';
import { LoadingOutlined } from '@ant-design/icons';

export const OrdersPage = () => {
    const [open, setOpen] = useState(false);
    const { data: dataStat, isLoading } = useGetStatQuery();
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        if (dataStat) {
            setDataLoaded(true);
        }
    }, [dataStat]);
    const getDate = () => {
        const currentDate = new Date();
        const stringDate: string = `${String(currentDate.getDate()).padStart(
            2,
            '0'
        )}.${String(currentDate.getMonth() + 1).padStart(
            2,
            '0'
        )}.${currentDate.getFullYear()}`;
        return stringDate;
    };

    return (
        <Flex className={style.page}>
            <Typography.Text className={style.date}>
                {getDate()}
            </Typography.Text>
            {isLoading && !dataLoaded ? (
                <Spin
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
                        className={style.popover}
                    >
                        Создать новый заказ
                    </Flex>
                }
            >
                <Button
                    className={style.buttonPlus}
                    onClick={() => setOpen(true)}
                >
                    <Image src={plus} preview={false} />
                </Button>
            </Popover>
            <ModalAddOrder open={open} setOpen={setOpen} />
        </Flex>
    );
};
