import {
    Checkbox,
    Col,
    Flex,
    Pagination,
    PaginationProps,
    Row,
    Skeleton,
} from 'antd';
import { useEffect, useState } from 'react';
import styles from './TableOrders.module.css';
import CheckStepInfo from '../../modals/ModalCheckStepInfo/CheckStepInfo';
import RowOrder from '../tableOrdersComponents/RowOrders';
import RowOrdersWithChildren from '../tableOrdersComponents/RowOrderWithChild';
import {
    useGetInfoOrdersQuery,
    useGetPagesQuery,
} from '../../../app/services/orders';
import { Step } from '../../../utils/Step';
import { Orders } from '../../../utils/Orders';
import ModalTableStage from '../../modals/ModalTableStage/ModalTableStage';

export type ModalInfo = {
    kks: string;
    step_info: Step;
};
const TableOrders = () => {
    const [selectedStepData, setSelectedStepData] = useState<ModalInfo | null>(
        null
    );
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data } = useGetPagesQuery();
    const [pages, setPages] = useState<undefined | number>(data);
    const { data: orderData, isLoading } = useGetInfoOrdersQuery(currentPage);
    const [stepData, setStepData] = useState<Orders | undefined>();
    const [visible, setVisible] = useState<boolean[]>([]);
    useEffect(() => {
        setStepData(orderData);
        setPages(data);
    }, [orderData, data]);
    if (!stepData) {
        return null;
    }
    if (visible.length === 0) {
        setVisible(Object.keys(orderData!).map(() => false));
    }

    const toggleVisibility = (index: number) => {
        setVisible((prevState) =>
            prevState.map((state, idx) => (idx === index ? !state : state))
        );
    };
    const onSelectRow = (kksId: string, index: number) => {
        if (stepData) {
            const selectedData = {
                kks: stepData[kksId].kks,
                step_info: stepData[kksId].steps_info[index],
            };
            setSelectedStepData(selectedData);
            setOpen(true);
        }
    };
    const onChange = (id: number) => {
        setStepData((prevData) => {
            if (prevData) {
                const updatedData = Object.keys(prevData).reduce((acc, kks) => {
                    acc[kks] = {
                        ...prevData[kks],
                        steps_info: prevData[kks].steps_info.map((step) => {
                            if (step.step_id === id) {
                                return {
                                    ...step,
                                    is_completed: !step.is_completed,
                                };
                            }
                            return step;
                        }),
                    };
                    return acc;
                }, {} as Orders);
                return updatedData;
            }
        });
    };
    const onChangePage: PaginationProps['onChange'] = (page) => {
        setCurrentPage(page);
    };
    return (
        <>
            <Flex vertical style={{ width: '70vw' }}>
                <div className={styles.table} style={{ padding: '2vw' }}>
                    <Row>
                        <Col span={16} className={styles.row_title}>
                            Название
                        </Col>
                        <Col span={8} className={styles.row_title}>
                            Ответственный
                        </Col>
                    </Row>
                    {isLoading ? (
                        <Skeleton>
                            <div></div>
                            <div></div>
                        </Skeleton>
                    ) : (
                        <>
                            {Object.keys(orderData!).map((id, index) => (
                                <>
                                    <Row key={id} className={styles.row}>
                                        <Col
                                            span={16}
                                            className={styles.child_table}
                                        >
                                            <Checkbox
                                                checked={
                                                    orderData![id].is_completed
                                                }
                                                className={
                                                    orderData![id].is_completed
                                                        ? styles.unactiveOrder
                                                        : styles.activeOrder
                                                }
                                            />
                                            <span
                                                className={styles.btn_container}
                                                onClick={() =>
                                                    toggleVisibility(index)
                                                }
                                            >
                                                <button
                                                    className={
                                                        visible[index]
                                                            ? `${styles.open_btn} ${styles.active}`
                                                            : styles.open_btn
                                                    }
                                                ></button>
                                            </span>
                                            <p>{orderData![id].kks}</p>
                                        </Col>
                                        <Col span={8}></Col>
                                    </Row>
                                    <div
                                        className={
                                            visible[index]
                                                ? `${styles.fadeInDown} ${styles.active2}`
                                                : styles.hidden
                                        }
                                        key={index}
                                    >
                                        {Array.isArray(
                                            orderData![id].steps_info
                                        ) &&
                                            orderData![id].steps_info.map(
                                                (step, stepIndex) => (
                                                    <>
                                                        {step.children
                                                            .length !== 0 ? (
                                                            <RowOrdersWithChildren
                                                                key={
                                                                    step.step_id
                                                                }
                                                                step={step}
                                                                stepIndex={
                                                                    stepIndex
                                                                }
                                                                kks={id}
                                                                onChange={
                                                                    onChange
                                                                }
                                                                onSelectRow={
                                                                    onSelectRow
                                                                }
                                                            />
                                                        ) : (
                                                            <RowOrder
                                                                key={
                                                                    step.step_id
                                                                }
                                                                step={step}
                                                                stepIndex={
                                                                    stepIndex
                                                                }
                                                                kks={id}
                                                                onChange={
                                                                    onChange
                                                                }
                                                                onSelectRow={
                                                                    onSelectRow
                                                                }
                                                            />
                                                        )}
                                                    </>
                                                )
                                            )}
                                    </div>
                                </>
                            ))}
                        </>
                    )}
                </div>
                <Pagination
                    current={currentPage}
                    defaultPageSize={1}
                    total={pages}
                    onChange={onChangePage}
                    className={styles.pagination}
                />
                {selectedStepData ? (
                    selectedStepData?.step_info.step_name === 'Склад' ? (
                        <ModalTableStage
                            open={open}
                            setOpen={setOpen}
                            kks={selectedStepData.kks}
                        />
                    ) : (
                        <CheckStepInfo
                            open={open}
                            setOpen={setOpen}
                            kks={selectedStepData.kks}
                            step={selectedStepData.step_info}
                        ></CheckStepInfo>
                    )
                ) : null}
            </Flex>
        </>
    );
};
export default TableOrders;
