import { Flex, Image } from 'antd';
import styles from './CardTableWorker.module.css';
import srcUser from '../../assets/image/user.png';
import { useState } from 'react';
import {
	InitialState,
} from '../../features/ordersWorkerSlice';
import { Draggable } from 'react-beautiful-dnd';
import { ModalWorkerOrder } from '../modals/ModalWorkerOrder/ModalWorkerOrder';

type Props = {
	id: number;
	name: string;
	index: number;
	table: InitialState;
	setTable: React.Dispatch<React.SetStateAction<InitialState>>
};

export const CardTableWorker = ({ id, name, index, table, setTable }: Props) => {
	const [open, setOpen] = useState<boolean>(false)
	const currentCard = table[name].cards.find((card) => card.id === id)

	const handleClick=()=>{
		setOpen(true)
	}

	return (
		<>
			<Draggable draggableId={String(id)} index={index}>
				{(provided) => (
					<Flex
						className={styles.card}
						vertical
						gap="0.78vw"
						{...provided.dragHandleProps}
						{...provided.draggableProps}
						ref={provided.innerRef}
						onClick={handleClick}
					>
						<Flex justify="center">
							{name === 'process' || name === 'ready' ? (
								<Image
									src={srcUser}
									preview={false}
									className={styles.image}
								/>
							) : (
								''
							)}
						</Flex>
						{currentCard?.name}
					</Flex>
				)}
			</Draggable>
			{name !== 'ready' && <ModalWorkerOrder open={open} setOpen={setOpen} name={name} setTable={setTable} index={index} table={table}/>}
		</>
	);
};
