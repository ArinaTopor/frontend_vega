import {Flex, Image, Typography } from 'antd';
import styles from './ColumnTableWorker.module.css';
import srcSquare from '../../assets/icons/square.svg';
import srcClock from '../../assets/icons/clock.svg';
import srcReady from '../../assets/icons/ready.svg';
import { CardTableWorker } from '../CardTableWorker/CardTableWorker';
import { InitialState} from '../../features/ordersWorkerSlice';
import { Droppable } from 'react-beautiful-dnd';


type InfoColumns = {
	[key: string]: {
		srcImage: string;
		title: string;
	};
};

const typesColumn: InfoColumns = {
	made: {
		srcImage: srcSquare,
		title: 'Сделать',
	},
	process: {
		srcImage: srcClock,
		title: 'В процессе',
	},
	ready: {
		srcImage: srcReady,
		title: 'Готово',
	},
};

type Props = {
	name: string;
	table: InitialState;
	setTable: React.Dispatch<React.SetStateAction<InitialState>>
};

export const ColumnTableWorker = ({ name, table, setTable }: Props) => {
	return (
		<Flex
			className={`${styles.column} ${styles[name]}`}
			vertical
			gap="0.88vw"
		>
			<Flex align="center" gap="0.78vw">
				<Image src={typesColumn[name].srcImage} preview={false} />
				<Typography.Text className={styles.title_column}>
					{typesColumn[name].title}
				</Typography.Text>
			</Flex >
			<Droppable droppableId={name}>
				{(provided) => (
					<Flex {...provided.droppableProps} ref={provided.innerRef} className={styles.cards} gap="0.88vw" vertical>
						{table[name].cards.map((card, index) => (
							<CardTableWorker
								key={card.id}
								id={card.id}
								name={name}
								index={index}
								table={table}
								setTable={setTable}
							/>
						))}
						{provided.placeholder}
						<div></div>
					</Flex>
				)}
			</Droppable>
		</Flex>
	);
};
