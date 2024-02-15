import FormInput from './custom-input/FormInput';
import Select from './CustomSelect';
import {} from '../features/auth/employeesSlice';
import { useGetAreasQuery, useGetRolesQuery } from '../app/services/employees';
type Props = {
    isAdmin: boolean;
};

const AddEmployeeForm = ({ isAdmin }: Props) => {
    const { data: dataAreas, error: errorAreas } = useGetAreasQuery();
    const { data: dataRoles, error: errorRoles } = useGetRolesQuery();
    return (
        <form>
            <FormInput name='name' required={true} type='text' label='ФИО' />
            <FormInput name='login' required={true} type='text' label='Логин' />
            {isAdmin ? (
                <>
                    <FormInput
                        name='password'
                        required={true}
                        type='password'
                        label='Пароль для входа'
                    />
                </>
            ) : (
                <>
                    <Select
                        name='role'
                        placeholder=' '
                        required={true}
                        options={dataRoles ?? {}}
                        label='Роль'
                    />
                    <Select
                        name='area'
                        placeholder=' '
                        required={true}
                        options={dataAreas ?? {}}
                        label='Участок'
                    />
                    <FormInput
                        name='password'
                        required={true}
                        type='text'
                        label='Пароль'
                    />
                </>
            )}
        </form>
    );
};

export default AddEmployeeForm;
