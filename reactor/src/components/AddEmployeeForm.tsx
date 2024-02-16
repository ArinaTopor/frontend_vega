import FormInput from './custom-input/FormInput';
import Select from './CustomSelect';
import { roles } from '../features/auth/employeesSlice';
import {
    NewUser,
    useAddUserMutation,
    useGetAreasQuery,
} from '../app/services/employees';
import { buttonStyle } from '../pages/AddEmployeePage/style';
import { Button } from '@chakra-ui/react';
import { FormEvent } from 'react';

type Props = {
    isAdmin: boolean;
};

const AddEmployeeForm = ({ isAdmin }: Props) => {
    const { data: dataAreas, error: errorAreas } = useGetAreasQuery();
    const [addUser, { isLoading }] = useAddUserMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (isAdmin) {
            console.log(isAdmin);
        } else {
            const formDataObject: NewUser = {
                login: '',
                password: '',
                name: '',
                areaId: 0,
                roleId: 0,
            };
            formData.forEach((value: FormDataEntryValue, key: string) => {
                formDataObject[key] = value.toString();
            });
            try {
                // addUser(formDataObject);
                console.log('add');
            } catch (e) {
                console.log(e);
            }
            console.log(formDataObject);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
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
                    <Button variant='brand' sx={buttonStyle} type='submit'>
                        Cохранить
                    </Button>
                </>
            ) : (
                <>
                    <Select
                        name='roleId'
                        placeholder=' '
                        required={true}
                        options={roles ?? {}}
                        label='Роль'
                    />
                    <Select
                        name='areaId'
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
                    <Button variant='brand' sx={buttonStyle} type='submit'>
                        Создать
                    </Button>
                </>
            )}
        </form>
    );
};

export default AddEmployeeForm;
