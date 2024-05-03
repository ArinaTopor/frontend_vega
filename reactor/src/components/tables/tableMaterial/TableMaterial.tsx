import { Input, Tooltip } from 'antd';
import styles from './TableMaterial.module.css';
type Mat = {
    [key: string]: {
        Designation: string;
        Name: string;
        Count: string;
        Measure: string;
        Material: string;
        ObjectType: string;
    };
};
const TableMaterial = () => {
    const data: Mat = {
        '1': {
            Designation: 'AECF.00.004 ',
            Name: 'Уголок',
            Count: '1',
            Measure: 'шт.',
            Material: 'Лист Б-ПН-3 ГОСТ 19903-2015/12Х18Н10Т ГОСТ 5582-75',
            ObjectType: 'Деталь',
        },
        '2': {
            Designation: 'AECT.00.001 ',
            Name: 'Уголок',
            Count: '1',
            Measure: 'шт.',
            Material: 'Лист Б-ПН-3 ГОСТ 19903-2015/12Х18Н10Т ГОСТ 5582-75',
            ObjectType: 'Деталь',
        },
        '3': {
            Designation: 'AECT.00.002 ',
            Name: 'Уголок',
            Count: '1',
            Measure: 'шт.',
            Material: 'Лист Б-ПН-3 ГОСТ 19903-2015/12Х18Н10Т ГОСТ 5582-75',
            ObjectType: 'Деталь',
        },
    };
    return (
        <div>
            <table className={styles.material_table_container}>
                <thead className={styles.title_container}>
                    <tr>
                        <th className={styles.material_table__title}>
                            Обозначение
                        </th>
                        <th className={styles.material_table__title}>
                            Материал
                        </th>
                        <th className={styles.material_table__title}>
                            Наименование
                        </th>
                        <th className={styles.material_table__title}>К-во</th>
                        <th className={styles.material_table__title}>К-во</th>
                        <th className={styles.material_table__title}>ЕИ</th>
                        <th className={styles.material_table__title}>
                            Тип объекта
                        </th>
                    </tr>
                </thead>
                <tbody className={styles.material_table__body}>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>{data[key].Designation}</td>
                            <Tooltip
                                title={data[key].Material}
                                placement='right'
                                color='#758593'
                            >
                                <td
                                    className={
                                        styles.material_table_body__material
                                    }
                                >
                                    {data[key].Material}
                                </td>
                            </Tooltip>
                            <td>{data[key].Name}</td>
                            <td>
                                <input
                                    type='number'
                                    className={styles.material_table__input}
                                />
                            </td>
                            <td>{data[key].Count}</td>
                            <td>{data[key].Measure}</td>
                            <td>{data[key].ObjectType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default TableMaterial;
