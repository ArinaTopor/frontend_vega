import { Button, Flex, Modal, Typography } from 'antd';
import styles from './ModalWorkerOrder.module.css'
import { useAppDispatch} from '../../../app/hooks';
import { InitialState,update } from '../../../features/ordersWorkerSlice';

type Props={
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
	name: string
	setTable: React.Dispatch<React.SetStateAction<InitialState>>
	index: number
	table: InitialState
}

export function ModalWorkerOrder({open, setOpen, name, setTable, index, table}:Props){
	const dispatch = useAppDispatch()

	const handleCLose = () => {
		setOpen(false);
	};

	const handleClick=()=>{
		const newName = name === 'made' ? 'process' : 'ready'
		const newStores = { ...table };
		const newSourceItems = [...table[name].cards];
		const [deletedItem] = newSourceItems.splice(index, 1);
		const newDestinationItems = [...table[newName].cards]
		newDestinationItems.splice(-1, 0, deletedItem);
		newStores[name] = {
			...table[name],
			cards: newSourceItems,
		};
		newStores[newName] = {
			...table[newName],
			cards: newDestinationItems,
		};
		setTable(newStores)
		dispatch(update(newStores))
	}

	return(
		<Modal
			open={open}
			width='45.4vw'
			onCancel={handleCLose}
			centered
			maskClosable={false}
			footer={false}
		>
			<Flex vertical className={styles.modal}>
				<Typography.Text className={styles.title}>Задание</Typography.Text>
				<Flex vertical gap='30px'className={styles.body}>
					<Flex vertical gap='20px'>
						<Typography.Text className={styles.label}>
							Шифрование
						</Typography.Text>
						<Flex className={`${styles.field} ${styles.encryption}`}>
							gdg
						</Flex>
					</Flex>
					<Flex vertical gap='20px'>
						<Typography.Text className={styles.label}>
							Посмотреть КД
						</Typography.Text>
						<Flex className={`${styles.field} ${styles.file}`}>
							qwertyu.pdf
						</Flex>
					</Flex>
					<Flex vertical gap='20px'>
						<Typography.Text className={styles.label}>
							Статус
						</Typography.Text>
						<Flex className={`${styles.field} ${name === 'made' ? styles.status_made : styles.status_process}`}>
						{name === 'made' ? 'Сделать' : 'В процессе'}
						</Flex>
					</Flex>
				</Flex>
				<Button type='primary' className={styles.button} onClick={handleClick}>
					{name === 'made' ? 'Взять задание' : 'Готово'}
				</Button>
			</Flex>
		</Modal>
	)
}