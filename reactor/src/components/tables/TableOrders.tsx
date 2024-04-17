import { Checkbox, Col, Flex, Row } from 'antd';
import { useState } from 'react';
import styles from './tableOrders.module.css';
import { MinusSquareFilled, MinusSquareOutlined } from '@ant-design/icons';
import OrderStatistics from '../OrderStatistics/OrderStatistics';
interface DataType {
    key: number | string;
    name: string;
    responsible?: string;
    checked?: boolean;
    children?: DataType[];
}

const data: DataType[] = [
    {
        key: 1,
        name: '6373ggy37ghdbbh',
        responsible: '',
        checked: false,
        children: [
            {
                key: 2,
                name: 'Технические данные и т.д',
                responsible: 'admin1',
                checked: true,
            },
            {
                key: 3,
                name: 'Разработка КД',
                responsible: '',
                children: [
                    {
                        key: 1111,
                        name: 'Dev 1',
                        responsible: 'admin 1.2',
                        checked: false,
                    },
                    {
                        key: 11151,
                        name: 'Dev 2',
                        responsible: 'admin 2.2',
                        checked: false,
                    },
                ],
            },
            {
                key: 4,
                name: 'Согласование КД',
                responsible: 'admin3',
                checked: false,
            },
            {
                key: 5,
                name: 'Отдел поставки',
                responsible: 'admin4',
            },
        ],
    },
    
    {
        key: 90,
        name: '984hhebejejb',
        responsible: '',
        checked: false,
        children: [
            {
                key: 8,
                name: 'Технические данные и т.д',
                responsible: 'admin1',
                checked: true,
            },
            {
                key: 9,
                name: 'Разработка КД',
                responsible: 'admin2',
                checked: true,
            },
            {
                key: 10,
                name: 'Согласование КД',
                responsible: 'admin3',
                checked: false,
            },
            {
                key: 11,
                name: 'Отдел поставки',
                responsible: 'admin4',
            },
        ],
    }
];

const TableOrders = () => {
    const [visible, setVisible] = useState(data.map(() => false));
    const toggleVisibility = (index: number) => {
        setVisible((prevState) =>
            prevState.map((state, idx) => (idx === index ? !state : state))
        );
    };
    

    return (
        <div className={styles.table} style={{ padding: '2vw' }}>
            <Row>
                <Col span={12} className={styles.row_title}>
                    Название
                </Col>
                <Col span={12} className={styles.row_title}>
                    Ответственный
                </Col>
            </Row>
            {data.map((item, index) => (
                <>
                    <Row>
                        <Col span={12} className={styles.child_table}>
                            <MinusSquareFilled
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
                            <p>{item.name}</p>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                    {item.children?.map((child) => (
                        <>
                            {child.key === 3 ? (
                                <Row
                                    className={
                                        visible[index]
                                            ? `${styles.fadeInDown} ${styles.active2}`
                                            : styles.hidden
                                    }
                                    key={child.key}
                                >
                                    <Col
                                        span={12}
                                        className={styles.stage}
                                        style={{
                                            display: 'flex',
                                            paddingLeft: '6vw',
                                        }}
                                    >
                                        <MinusSquareOutlined
                                            style={{
                                                color: '#4A505C',
                                                fontSize: '20px',
                                                paddingRight: '1vw',
                                            }}
                                        />
                                        {/* <MinusSquareFilled
                                        style={{
                                            color: '#4A505C',
                                            fontSize: '20px',
                                        }}
                                    /> */}
                                        {/* <button
                                        className={
                                            visible[index]
                                                ? `${styles.open_btn} ${styles.active}`
                                                : styles.open_btn
                                        }
                                        onClick={() =>
                                            toggleVisibility(index)
                                        }
                                    ></button> */}
                                        <p>{child.name}</p>
                                    </Col>
                                    <Col
                                        span={12}
                                        className={styles.responsible}
                                    ></Col>
                                </Row>
                            ) : (
                                <Row
                                    className={
                                        visible[index]
                                            ? `${styles.fadeInDown} ${styles.active2}`
                                            : styles.hidden
                                    }
                                    key={child.key}
                                >
                                    <Col
                                        span={12}
                                        className={styles.stages}
                                        style={{ paddingLeft: '6vw' }}
                                    >
                                        <Checkbox
                                            checked={child.checked}
                                            className={styles.check}
                                        >
                                            {child.name}
                                        </Checkbox>
                                    </Col>
                                    <Col
                                        span={12}
                                        className={styles.responsible}
                                    >
                                        {child.responsible}
                                    </Col>
                                </Row>
                            )}
                            <div style={{ marginTop: '1.2vh' }}>
                                {child.children?.map((prechild) => (
                                    <Row
                                        className={
                                            visible[index]
                                                ? `${styles.fadeInDown} ${styles.active2}`
                                                : styles.hidden
                                        }
                                    >
                                        <Col
                                            span={12}
                                            style={{
                                                paddingLeft: '8vw',
                                                paddingBottom: '1vh',
                                            }}
                                        >
                                            <Checkbox
                                                checked={
                                                    prechild.checked
                                                }
                                                className={styles.check}
                                            >
                                                {prechild.name}
                                            </Checkbox>
                                        </Col>
                                        <Col
                                            span={12}
                                            className={
                                                styles.responsible
                                            }
                                        >
                                            {prechild.responsible}
                                        </Col>
                                    </Row>
                                ))}
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    );
};
export default TableOrders;
