import styles from './CreateProduct.module.css';
const CreateProduct = () => {
    return (
        <div className={styles.form_container}>
            <div className={styles.column_wrapper}>
                <div>''</div>
                <div className={styles.column_wrapper}>VUF894738589375</div>
            </div>
            <div className={styles.column_wrapper}>
                <div>№ ТП</div>
                <div className={styles.column_wrapper}>40</div>
            </div>
            <div className={styles.column_wrapper}>
                <div>Шифр под СБ</div>
                <div className={styles.column_wrapper}>-</div>
                <div className={styles.column_wrapper}>-</div>
            </div>
            <div className={styles.column_wrapper}>
                <div>№ ТП</div>
                <div
                    style={{ height: '72px' }}
                    className={styles.column_wrapper}
                ></div>
                <div
                    style={{ height: '72px' }}
                    className={styles.column_wrapper}
                ></div>
            </div>
            <div className={styles.column_wrapper}>
                <div>Шифр детали</div>
                <div className={styles.column_wrapper}>SCSF.00.0000</div>
                <div className={styles.column_wrapper}>AESF.00.0000</div>
            </div>
            <div className={styles.column_wrapper}>
                <div>№ ТП</div>
                <div className={styles.column_wrapper}>00</div>
                <div className={styles.column_wrapper}>01</div>
            </div>
        </div>
    );
};
export default CreateProduct;
