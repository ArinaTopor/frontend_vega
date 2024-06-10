import styles from './CreateProduct.module.css';
const CreateProduct = () => {
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr>
                    <th></th>
                    <th>№ ТП</th>
                    <th>Шифр подСБ</th>
                    <th>№ ТП</th>
                    <th>Шифр детали</th>
                    <th>№ ТП</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={3}>VUF</td>
                    <td rowSpan={3}>40</td>
                </tr>

                <tr>
                    <td>-</td>
                    <td></td>
                    <td>SCSF.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td></td>
                    <td>AESF.00.0000</td>
                    <td>01</td>
                </tr>
                <tr>
                    <td rowSpan={3}>VUFW</td>
                    <td rowSpan={3}>43</td>
                </tr>

                <tr>
                    <td>-</td>
                    <td>41</td>
                    <td>MBFW.00.0000</td>
                    <td>01</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td></td>
                    <td>PRFW.00.0000</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td rowSpan={6}>VUFCF</td>
                    <td rowSpan={6}>44</td>
                </tr>

                <tr>
                    <td rowSpan={2}>FLCF</td>
                    <td rowSpan={2}>41</td>
                    <td>MBFW.00.0000</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>PRFW.00.0000</td>
                    <td>02</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td></td>
                    <td>MBCF.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td></td>
                    <td>PLCF.00.0000</td>
                    <td>01</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td></td>
                    <td>FECF.00.0000</td>
                    <td>02</td>
                </tr>
                <tr>
                    <td rowSpan={5}>VUBF</td>
                    <td rowSpan={5}>45</td>
                </tr>

                <tr>
                    <td rowSpan={2}>FLBF</td>
                    <td rowSpan={2}>41</td>
                    <td>AEBF.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>ROBF.00.0000</td>
                    <td>02</td>
                </tr>
                <tr>
                    <td rowSpan={2}>-</td>
                    <td rowSpan={2}></td>
                    <td>MBCF.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>PLCF.00.0000</td>
                    <td>01</td>
                </tr>
                <tr>
                    <td rowSpan={4}>VUFA</td>
                    <td rowSpan={4}>46</td>
                </tr>

                <tr>
                    <td rowSpan={2}>-</td>
                    <td rowSpan={2}></td>
                    <td>SIFA.00.0000</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>ROBF.00.0000</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>FLFA</td>
                    <td>41</td>
                    <td>AEFA.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>VUAV</td>
                    <td>47</td>
                    <td>-</td>
                    <td></td>
                    <td>PRAV.00.0000</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td rowSpan={4}>VUSP</td>
                    <td rowSpan={4}>48</td>
                    <td rowSpan={4}>-</td>
                    <td rowSpan={4}></td>
                </tr>

                <tr>
                    <td>SSP.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>SSSP.00.0000</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>IBSP.00.0000</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td rowSpan={4}>VUCT</td>
                    <td rowSpan={4}>49</td>
                    <td rowSpan={4}>-</td>
                    <td rowSpan={4}></td>
                </tr>

                <tr>
                    <td>MBCT.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>PLCT.00.0000</td>
                    <td>02</td>
                </tr>
                <tr>
                    <td>AECT.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td rowSpan={3}>VUPS</td>
                    <td rowSpan={3}>41</td>
                    <td rowSpan={3}>-</td>
                    <td rowSpan={3}></td>
                </tr>

                <tr>
                    <td>MBPS.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>WMPS.00.0000</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td rowSpan={7}>VU</td>
                    <td rowSpan={7}></td>
                    <td rowSpan={7}>-</td>
                    <td rowSpan={7}></td>
                </tr>

                <tr>
                    <td>FLVU.00.0000</td>
                    <td>03</td>
                </tr>
                <tr>
                    <td>FCVU.00.0000</td>
                    <td>03</td>
                </tr>
                <tr>
                    <td>MBVU.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>PLVU.00.0000</td>
                    <td>02</td>
                </tr>
                <tr>
                    <td>AEVU.00.0000</td>
                    <td>00</td>
                </tr>
                <tr>
                    <td>DPVU.00.0000</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>VUCS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
};
export default CreateProduct;
{
    /* <div className={styles.form_container}>
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
</div> */
}
