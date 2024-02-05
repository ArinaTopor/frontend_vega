import FillingInput from './CustomInput/FormInput'
import FillingSelect from './AddEmployeeSelect'
type Props={
	isAdmin:boolean
}

const roles=[
	'role1',
	'role2',
	'role3'
]

const sites=[
	'site1',
	'site2',
	'site3'
]

const AddEmployeeForm=({isAdmin}:Props)=>{

	return(
		<form>
			<FillingInput name='name' required={true} type='text' label='ФИО'/>
			{
				isAdmin ? 
				<>
				<FillingInput name='login' required={true} type='text' label='Логин'/>
				<FillingInput name='password' required={true} type='password' label='Пароль для входа'/>
				</>:
				<>
				<FillingSelect name='role' placeholder=' ' required={true} 
				options={roles} label='Роль'/>
				<FillingSelect name='site' placeholder=' ' required={true} options={sites} label='Участок'/>
				<FillingInput name='password' required={true} type='text' label='Пароль'/>
				</>
			}
		</form>
	)
}

export default AddEmployeeForm