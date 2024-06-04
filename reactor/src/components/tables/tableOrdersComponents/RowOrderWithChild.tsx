import { Col, Row } from 'antd';
import { useState } from 'react';
import styles from './CommonOrder.module.css';
import RowOrder from './RowOrders';
import { Step } from '../../../utils/Step';
type StepProps = {
    step: Step;
    stepIndex: number;
    onChange: (id: number) => void;
    kks: string;
    selectRow: (kksId: string, index: number) => void;
};
const RowOrdersWithChildren = ({
    step,
    stepIndex,
    onChange,
    selectRow,
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
            <Row style={{ marginBottom: '2.5vh' }} className={styles.stage}>
                <Col
                    span={16}
                    className={styles.stage}
                    style={{
                        display: 'flex',
                        paddingLeft: '6vw',
                        gap: '1vw',
                        alignItems: 'center',
                    }}
                >
                    <span
                        className={styles.btn_container}
                        onClick={() => toggleVisibility(stepIndex)}
                    >
                        <button
                            className={
                                visible[stepIndex]
                                    ? `${styles.open_btn} ${styles.active}`
                                    : styles.open_btn
                            }
                        ></button>
                    </span>
                    <p className={styles.step_name}>{step.step_name}</p>
                </Col>
                <Col span={8} className={styles.responsible}></Col>
            </Row>
            {visible[stepIndex] && (
                <div
                    className={`${styles.fadeInDown} ${styles.active2}`}
                    style={{
                        marginTop: '1.2vh',
                        marginLeft: '1.5vw',
                    }}
                >
                    {step.children &&
                        step.children.map((prechild, prechildIndex) => (
                            <RowOrder
                                key={prechild.step_id}
                                step={prechild}
                                stepIndex={prechildIndex}
                                kks={kks}
                                onChange={onChange}
                                onSelectRow={selectRow}
                            />
                        ))}
                </div>
            )}
        </>
    );
};
export default RowOrdersWithChildren;
