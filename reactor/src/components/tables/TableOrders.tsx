import { Col, Flex, Pagination, PaginationProps, Row, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import styles from './TableOrders.module.css';
import { XFilled } from '@ant-design/icons';
import CheckStepInfo from '../modals/ModalCheckStepInfo/CheckStepInfo';
import RowOrder from './tableOrders/RowOrders';
import RowOrdersWithChildren from './tableOrders/RowOrderWithChild';
import {
    useGetInfoOrdersQuery,
    useGetPagesQuery,
} from '../../app/services/orders';

export type file = {
    filename: string;
    path: string;
    upload_date: string;
    is_needed_to_change: boolean;
};
export type step = {
    step_id: number;
    step_name: string;
    responsible: {
        login: string;
        name: string;
    };
    is_completed: boolean;
    files: file[];
};
export type step_info = step & { children: step[] };

type steps = {
    [key: string]: {
        kks: string;
        steps_info: step_info[];
    };
};

export type ModalInfo = {
    kks: string;
    step_info: step;
};
const TableOrders = () => {
    const [selectedStepData, setSelectedStepData] = useState<ModalInfo | null>(
        null
    );
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { data } = useGetPagesQuery();
    const [pages, setPages] = useState<undefined | number>(data);
    const {
        data: orderData,
        isLoading,
        isFetching,
    } = useGetInfoOrdersQuery(currentPage);
    const [stepData, setStepData] = useState<steps | undefined>();
    const [visible, setVisible] = useState<boolean[]>([]);
    useEffect(() => {
        setStepData(orderData);
        setPages(data);
    }, [orderData, data]);

    if (isLoading) {
        return <p>Loading</p>;
    }
    if (!stepData) {
        return <p>Нет данных</p>;
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
                }, {} as steps);
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
                    <Skeleton loading={isFetching && isLoading}>
                        {Object.keys(orderData!).map((kks, index) => (
                            <>
                                <Row key={kks}>
                                    <Col
                                        span={16}
                                        className={styles.child_table}
                                    >
                                        <XFilled
                                            style={{
                                                color: '#4A505C',
                                                fontSize: '20px',
                                            }}
                                        />
                                        <button
                                            className={
                                                visible[index]
                                                    ? `${styles.open_btn} ${styles.active}`
                                                    : styles.open_btn
                                            }
                                            onClick={() =>
                                                toggleVisibility(index)
                                            }
                                        ></button>
                                        <p>{orderData![kks].kks}</p>
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
                                        orderData![kks].steps_info
                                    ) &&
                                        orderData![kks].steps_info.map(
                                            (step, stepIndex) => (
                                                <>
                                                    {step.children.length !==
                                                    0 ? (
                                                        <RowOrdersWithChildren
                                                            key={step.step_id}
                                                            step={step}
                                                            stepIndex={
                                                                stepIndex
                                                            }
                                                            kks={kks}
                                                            onChange={onChange}
                                                            onSelectRow={
                                                                onSelectRow
                                                            }
                                                        />
                                                    ) : (
                                                        <RowOrder
                                                            key={step.step_id}
                                                            step={step}
                                                            stepIndex={
                                                                stepIndex
                                                            }
                                                            kks={kks}
                                                            onChange={onChange}
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
                    </Skeleton>
                </div>
                <Pagination
                    current={currentPage}
                    defaultPageSize={1}
                    total={pages}
                    onChange={onChangePage}
                    className={styles.pagination}
                />
                {selectedStepData && (
                    <CheckStepInfo
                        open={open}
                        setOpen={setOpen}
                        kks={selectedStepData.kks}
                        step={selectedStepData.step_info}
                    ></CheckStepInfo>
                )}
            </Flex>
        </>
    );
};
export default TableOrders;
