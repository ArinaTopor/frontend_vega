import { Text } from '@chakra-ui/react'
import FillingInput from '../FillingInput/FillingInput'
import FillingSelect from '../FillingSelect/FillingSelect'
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

const FillingForm=({isAdmin}:Props)=>{

	return(
		<form>
			<Text fontSize='1.1vw' fontWeight='500' mb='1.9vh'>ФИО</Text>
			<FillingInput name='name' required={true} type='text'/>
			<Text fontSize='1.1vw' fontWeight='500' mb='1.9vh'>Роль</Text>
			<FillingSelect name='role' placeholder=' ' required={true} 
			options={roles}/>
			<Text fontSize='1.1vw' fontWeight='500' mb='1.9vh'>Участок</Text>
			{
				isAdmin ?
				<FillingInput name='site' required={true} type='text'/>:
				<FillingSelect name='role' placeholder=' ' required={true} options={sites}/>
			}
			<Text fontSize='1.1vw' fontWeight='500' mb='1.9vh'>
				Пароль для входа
			</Text>
			<FillingInput name='password' required={true} type='password'/>
		</form>
	)
}

export default FillingForm