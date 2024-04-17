import { Col, Row } from 'antd';
import { MinusSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { step_info } from '../TableOrders';
import styles from './CommonOrder.module.css';
import RowOrder from './RowOrders';
type StepProps = {
    step: step_info;
    stepIndex: number;
    onChange: (id: number) => void;
    kks: string;
    onSelectRow: (kksId: string, index: number) => void;
};
const RowOrdersWithChildren = ({
    step,
    stepIndex,
    onChange,
    onSelectRow,
    kks,
}: StepProps) => {
    const [visible, setVisible] = useState(Object.keys(step).map(() => false));
    const toggleVisibility = (index: number) => {
        setVisible((prevState) =>
            prevState.map((state, idx) => (idx === index ? !state : state))
        );
    };
    return (
        <>
            <Row
                className={
                    visible[stepIndex]
                        ? `${styles.fadeInDown} ${styles.active2}`
                        : styles.hidden
                }
            >
                <Col
                    span={16}
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
                        onClick={() => toggleVisibility(stepIndex)}
                    />
                    <p className={styles.step_name}>{step.step_name}</p>
                </Col>
                <Col span={8} className={styles.responsible}></Col>
            </Row>
            {visible[stepIndex] && ( // Проверяем visible[stepIndex]
                <div
                    className={`${styles.fadeInDown} ${styles.active2}`}
                    style={{
                        marginTop: '1.2vh',
                        marginLeft: '1.5vw',
                    }}
                >
                    {step.children?.map((prechild, prechildIndex) => (
                        <RowOrder
                            key={prechild.step_id}
                            step={prechild}
                            stepIndex={prechildIndex}
                            kks={kks}
                            onChange={onChange}
                            onSelectRow={onSelectRow}
                        />
                    ))}
                </div>
            )}
        </>
    );
};
export default RowOrdersWithChildren;
