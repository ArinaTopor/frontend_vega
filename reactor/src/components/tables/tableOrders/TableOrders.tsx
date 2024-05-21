import React from 'react';
import { Checkbox, Col, Flex, Pagination, PaginationProps, Row } from 'antd';
import { useEffect, useState } from 'react';
import CheckStepInfo from '../../modals/ModalCheckStepInfo/CheckStepInfo';
import RowOrder from '../tableOrdersComponents/RowOrders';
import RowOrdersWithChildren from '../tableOrdersComponents/RowOrderWithChild';
import {
    useGetInfoOrdersQuery,
    useGetPagesQuery,
} from '../../../app/services/orders';
import { Step } from '../../../utils/Step';
import { Orders, Step_info } from '../../../utils/Orders';
import { ModalTypes } from '../../../constans/typeModals';
import { selectUser } from '../../../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { ModalAddDocuments } from '../../modals/ModalAddDocuments/ModalAddDocuments';
import { isCanAddDocument } from '../../../functions/checkPrivilegesUser';
import { ModalInfo } from '../../../utils/ModalInfo';
import styles from './TableOrders.module.css';
import { ModalOrderApproval } from '../../modals/ModalOrderApproval/ModalOrderApproval';

const TableOrders = () => {
    const [selectedStepData, setSelectedStepData] = useState<ModalInfo | null>(
        null
    );
    const { data } = useGetPagesQuery();
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState<undefined | number>(data);
    const { data: orderData } = useGetInfoOrdersQuery(currentPage);
    const [typeModal, setTypeModal] = useState<ModalTypes | null>(null);
    const [stepData, setStepData] = useState<Orders | undefined>();
    const [visible, setVisible] = useState<boolean[]>([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        if (orderData) {
            setStepData(orderData);
            setPages(data);
        }
    }, [orderData, data]);
    if (visible.length === 0) {
        setVisible(Object.keys(orderData!).map(() => false));
    }

    const toggleVisibility = (index: number) => {
        setVisible((prevState) =>
            prevState.map((state, idx) => (idx === index ? !state : state))
        );
    };
    const onSelectRow = (kksId: string, id: number) => {
        if (stepData) {
            const selectedData: ModalInfo = {
                kks: stepData[kksId].kks,
                step_info: findStep(id, stepData[kksId].steps_info),
            };

            if (!selectedData.step_info || !user) return;
            const docChecks: {
                type: ModalTypes;
                docType: string;
                privilege: string;
            }[] = [
                {
                    type: ModalTypes.addDocument,
                    docType: 'Разработка технических данных',
                    privilege: 'tech data create',
                },
                {
                    type: ModalTypes.addDocument,
                    docType: 'Разработка чертежей и спецификации',
                    privilege: 'draft create',
                },
                {
                    type: ModalTypes.addDocument,
                    docType: 'Разработка электросхемы',
                    privilege: 'wiring diagram create',
                },
                {
                    type: ModalTypes.addDocument,
                    docType: 'Разработка ИДП и ПС',
                    privilege: 'idp create',
                },
                {
                    type: ModalTypes.approvalSteps,
                    docType: 'Согласование АЭП',
                    privilege: 'agree create',
                },
                {
                    type: ModalTypes.addDocument,
                    docType: 'Отдел снабжения',
                    privilege: '0',
                },
                { type: ModalTypes.stage, docType: 'Склад', privilege: '0' },
            ];
            setSelectedStepData(selectedData);

            if (selectedData.step_info.is_completed) {
                setTypeModal(ModalTypes.showInfo);
            } else {
                const docCheck = docChecks.find(({ docType, privilege }) =>
                    isCanAddDocument(
                        user,
                        docType,
                        selectedData.step_info!,
                        privilege,
                        stepData[kksId].steps_info,
                        id
                    )
                );

                if (docCheck) {
                    setTypeModal(docCheck.type);
                } else {
                    setTypeModal(null);
                }
            }
            setOpen(true);
        }
    };

    const findStep = (id: number, steps_info: Step_info[]) => {
        function recursionFindStep(stepsData: Step_info[]) {
            return stepsData.find((step) => {
                if (step.step_id !== id) {
                    return findStepChildren(step.children);
                }
                return true;
            });
        }
        function findStepChildren(subStep: Step[]) {
            return subStep.find((step) => step.step_id === id);
        }
        return recursionFindStep(steps_info);
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

                    <>
                        {Object.keys(orderData!).map((id, index) => (
                            <React.Fragment key={id}>
                                <Row className={styles.row}>
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
                                    {Array.isArray(orderData![id].steps_info) &&
                                        orderData![id].steps_info.map(
                                            (step, stepIndex) => (
                                                <React.Fragment
                                                    key={step.step_id}
                                                >
                                                    {step.children.length !==
                                                    0 ? (
                                                        <RowOrdersWithChildren
                                                            step={step}
                                                            stepIndex={
                                                                stepIndex
                                                            }
                                                            kks={id}
                                                            onChange={onChange}
                                                            onSelectRow={
                                                                onSelectRow
                                                            }
                                                        />
                                                    ) : (
                                                        <RowOrder
                                                            step={step}
                                                            stepIndex={
                                                                stepIndex
                                                            }
                                                            kks={id}
                                                            onChange={onChange}
                                                            onSelectRow={
                                                                onSelectRow
                                                            }
                                                        />
                                                    )}
                                                </React.Fragment>
                                            )
                                        )}
                                </div>
                            </React.Fragment>
                        ))}
                    </>
                </div>
                <Pagination
                    current={currentPage}
                    defaultPageSize={1}
                    total={pages}
                    onChange={onChangePage}
                    className={styles.pagination}
                />
                {selectedStepData &&
                    selectedStepData.step_info &&
                    !selectedStepData.step_info.is_completed &&
                    typeModal === ModalTypes.addDocument && (
                        <ModalAddDocuments
                            open={open}
                            onOpen={setOpen}
                            kks={selectedStepData.kks}
                            step={selectedStepData.step_info}
                        />
                    )}
                {selectedStepData &&
                    selectedStepData.step_info &&
                    typeModal === ModalTypes.showInfo && (
                        <CheckStepInfo
                            open={open}
                            onOpen={setOpen}
                            kks={selectedStepData.kks}
                            step={selectedStepData.step_info}
                        ></CheckStepInfo>
                    )}
                {selectedStepData &&
                    selectedStepData.step_info &&
                    typeModal === ModalTypes.stage && (
                        <ModalOrderApproval
                            open={open}
                            setOpen={setOpen}
                            kks={selectedStepData.kks}
                            step={selectedStepData.step_info}
                        ></ModalOrderApproval>
                    )}
            </Flex>
        </>
    );
};
export default TableOrders;
