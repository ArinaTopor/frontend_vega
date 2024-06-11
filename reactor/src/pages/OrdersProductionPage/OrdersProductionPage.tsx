import { Button, Flex, Image, Popover, Typography } from 'antd';
import plus from '../../assets/icons/plus.svg';
import styles from './OrdersProductionPage.module.css';
import { getDate } from '../../functions/dateFunc';
import { WaitingList } from '../../components/WaitingList/WaitingList';
import { useState } from 'react';
import { ModalAddProductionOrder } from '../../components/modals/ModalAddProductionOrder/ModalAddProductionOrder';
const OrdersProductionPage = () => {
    const [open, setOpen] = useState(false)
    return (
        <Flex className={styles.page}>
            <Typography.Text className={styles.date}>
                {getDate()}
            </Typography.Text>
            <WaitingList place='production'/>
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
            <ModalAddProductionOrder open={open} setOpen={setOpen}/>
        </Flex>
    );
};
export default OrdersProductionPage;