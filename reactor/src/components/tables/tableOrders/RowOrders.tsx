import { Checkbox, Col, Row } from 'antd';
import styles from './CommonOrder.module.css';
import { step, step_info } from '../TableOrders';

type StepProps = {
    step: step_info | step;
    stepIndex: number;
    onChange: (id: number) => void;
    kks: string;
    onSelectRow: (kksId: string, index: number) => void;
};

const RowOrder = ({
    step,
    stepIndex,
    onChange,
    kks,
    onSelectRow,
}: StepProps) => {
    return (
        <Row>
            <Col
                span={16}
                className={styles.stages}
                style={{
                    paddingLeft: '6vw',
                }}
            >
                <Checkbox
                    checked={step.is_completed}
                    className={styles.check}
                    onChange={() => onChange(step.step_id)}
                ></Checkbox>
                <p
                    className={styles.step_name}
                    style={{
                        display: 'inline',
                        paddingLeft: '1vw',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.1vw',
                    }}
                    onClick={() => onSelectRow(kks, stepIndex)}
                >
                    {step.step_name}
                </p>
            </Col>
            <Col span={8} className={styles.responsible}>
                {step.responsible.name}
            </Col>
        </Row>
    );
};
export default RowOrder;
