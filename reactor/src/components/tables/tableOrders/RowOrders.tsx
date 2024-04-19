import { Checkbox, Col, Row } from 'antd';
import styles from './CommonOrder.module.css';
import { Step } from '../../../utils/Step';
import { Step_info } from '../../../utils/Steps';

type StepProps = {
    step: Step_info | Step;
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
        <Row style={{ marginBottom: '1vh' }}>
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
                        paddingLeft: '1vw',
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
