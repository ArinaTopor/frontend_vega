import { Input } from 'antd';

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
            <table>
                <tr>
                    <th>Обозначение</th>
                    <th>Материал</th>
                    <th>Наименование</th>
                    <th>К-во</th>
                    <th>ЕИ</th>
                    <th>Тип объекта</th>
                </tr>
                <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>{data[key].Designation}</td>
                            <td>{data[key].Material}</td>
                            <td>{data[key].Name}</td>
                            <td>
                                <Input type='number' />
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
