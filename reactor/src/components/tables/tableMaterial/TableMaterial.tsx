import { Tooltip } from 'antd';
import styles from './TableMaterial.module.css';
import { ChangeData, MaterialTable } from '../../../utils/Orders';

type TableProps = {
    materialInfo: MaterialTable;
    setMaterialInfo: React.Dispatch<React.SetStateAction<MaterialTable>>;
    isCompleted: boolean;
    setChangedData: React.Dispatch<React.SetStateAction<ChangeData>>;
};
const TableMaterial = ({
    materialInfo,
    setMaterialInfo,
    isCompleted,
    setChangedData,
}: TableProps) => {
    const handleChange = (key: string, value: number) => {
        setMaterialInfo((prevMaterialInfo) => ({
            ...prevMaterialInfo,
            [key]: {
                ...prevMaterialInfo[key],
                amount: value,
            },
        }));
        setChangedData((prevChengedData) => ({
            ...prevChengedData,
            [key]: value.toString(),
        }));
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
                    {Object.keys(materialInfo).map((key) => (
                        <tr key={key}>
                            <td>{materialInfo[key].designation}</td>
                            <Tooltip
                                title={materialInfo[key].material}
                                placement='right'
                                color='#758593'
                            >
                                <td
                                    className={
                                        styles.material_table_body__material
                                    }
                                >
                                    {materialInfo[key].material}
                                </td>
                            </Tooltip>
                            <td>{materialInfo[key].name}</td>
                            <td>
                                <input
                                    type='number'
                                    style={
                                        materialInfo[key].amount ===
                                        materialInfo[key].count
                                            ? { borderColor: 'green' }
                                            : { borderColor: 'red' }
                                    }
                                    className={styles.material_table__input}
                                    value={materialInfo[key].amount}
                                    onChange={(e) =>
                                        handleChange(
                                            key,
                                            parseInt(e.target.value, 10)
                                        )
                                    }
                                />
                            </td>
                            <td>{materialInfo[key].count}</td>
                            <td>{materialInfo[key].measure}</td>
                            <td>{materialInfo[key].objectType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default TableMaterial;
