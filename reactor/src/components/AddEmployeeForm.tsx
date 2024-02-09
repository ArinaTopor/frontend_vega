import FormInput from './custom-input/FormInput';
import Select from './CustomSelect';
type Props = {
    isAdmin: boolean;
};

const roles = ['role1', 'role2', 'role3'];

const sites = ['site1', 'site2', 'site3'];

const AddEmployeeForm = ({ isAdmin }: Props) => {
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
                        options={roles}
                        label='Роль'
                    />
                    <Select
                        name='site'
                        placeholder=' '
                        required={true}
                        options={sites}
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
