import { Col, Flex, Row } from 'antd';
import { useState } from 'react';
import styles from './TableOrders.module.css';
import { XFilled } from '@ant-design/icons';
import CheckStepInfo from '../modal/ModalCheckStepInfo/CheckStepInfo';
import RowOrder from './tableOrders/RowOrders';
import RowOrdersWithChildren from './tableOrders/RowOrderWithChild';

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
const data2: steps = {
    '95': {
        kks: '32SAM46AH552',
        steps_info: [
            {
                step_id: 1,
                step_name: 'Внесение входной документации',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: true,
                files: [
                    {
                        filename: 'demo_1.docx',
                        path: '32SAM46AH552/Внесение входной документации/demo_1.docx',
                        upload_date: '2024-04-12T00:00:00',
                        is_needed_to_change: false,
                    },
                ],
                children: [],
            },
            {
                step_id: 2,
                step_name: 'Разработка технических данных',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: false,
                files: [],
                children: [],
            },
            {
                step_id: 3,
                step_name: 'Разработка конструкторской документации',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: false,
                files: [],
                children: [
                    {
                        step_id: 4,
                        step_name: 'Разработка чертежей и спецификации',
                        responsible: {
                            login: 'development_user',
                            name: 'Универсал',
                        },
                        is_completed: false,
                        files: [],
                    },
                    {
                        step_id: 5,
                        step_name: 'Разработка электросхем',
                        responsible: {
                            login: 'development_user',
                            name: 'Универсал',
                        },
                        is_completed: false,
                        files: [],
                    },
                ],
            },
            {
                step_id: 6,
                step_name: 'Разработка ИДП и ПС',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: false,
                files: [],
                children: [],
            },
            {
                step_id: 7,
                step_name: 'Согласование АЭП',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: false,
                files: [],
                children: [],
            },
            {
                step_id: 8,
                step_name: 'Отдел снабжения',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: false,
                files: [],
                children: [],
            },
            {
                step_id: 9,
                step_name: 'Склад',
                responsible: {
                    login: 'development_user',
                    name: 'Универсал',
                },
                is_completed: false,
                files: [],
                children: [],
            },
        ],
    },
};

export type ModalInfo = {
    kks: string;
    step_info: step;
};
const TableOrders = () => {
    const [stepData, setStepData] = useState<steps>(data2);
    const [visible, setVisible] = useState(Object.keys(data2).map(() => false));
    const [selectedStepData, setSelectedStepData] = useState<ModalInfo | null>(
        null
    );
    const [open, setOpen] = useState(false);

    const toggleVisibility = (index: number) => {
        setVisible((prevState) =>
            prevState.map((state, idx) => (idx === index ? !state : state))
        );
    };
    const onSelectRow = (kksId: string, index: number) => {
        const selectedData = {
            kks: stepData[kksId].kks,
            step_info: stepData[kksId].steps_info[index],
        };
        setSelectedStepData(selectedData);
        setOpen(true);
    };
    const onChange = (id: number) => {
        setStepData((prevData) => {
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
        });
    };
    return (
        <>
            <div
                style={{
                    color: '#314659',
                    fontSize: '4.62vh',
                    fontWeight: '800',
                    marginBottom: '4.4vh',
                    fontFamily: 'Roboto',
                    marginTop: '5.741vh',
                    marginLeft: '4.17vw',
                }}
            >
                31.03.2024
            </div>
            <Flex>
                <div className={styles.table} style={{ padding: '2vw' }}>
                    <Row>
                        <Col span={16} className={styles.row_title}>
                            Название
                        </Col>
                        <Col span={8} className={styles.row_title}>
                            Ответственный
                        </Col>
                    </Row>
                    {Object.keys(stepData).map((kks, index) => (
                        <>
                            <Row key={kks}>
                                <Col span={16} className={styles.child_table}>
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
                                        onClick={() => toggleVisibility(index)}
                                    ></button>
                                    <p>{stepData[kks].kks}</p>
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
                                {Array.isArray(stepData[kks].steps_info) &&
                                    stepData[kks].steps_info.map(
                                        (step, stepIndex) => (
                                            <>
                                                {step.children.length !== 0 ? (
                                                    <RowOrdersWithChildren
                                                        key={step.step_id}
                                                        step={step}
                                                        stepIndex={stepIndex}
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
                                                        stepIndex={stepIndex}
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
                </div>
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
