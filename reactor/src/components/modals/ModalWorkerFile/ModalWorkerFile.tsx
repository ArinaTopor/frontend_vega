import { Modal } from 'antd';
import styles from './ModalWorkerFile.module.css'

type Props = {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function ModalWorkerFile({open, setOpen} : Props){
	const handleCLose = () => {
		setOpen(false);
	};

	return(
		<Modal
			width='65.4vw'
			centered
			open = {open}
			footer={false}
			onCancel={handleCLose}
			maskClosable={false}
		>
			Ghbdsa
		</Modal>
	)
}