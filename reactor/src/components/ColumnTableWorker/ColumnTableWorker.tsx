import { Card, Flex, Image, Typography } from 'antd';
import styles from './ColumnTableWorker.module.css';
import srcSquare from '../../assets/icons/square.svg';
import srcClock from '../../assets/icons/clock.svg';
import srcReady from '../../assets/icons/ready.svg';
import { CardTableWorker } from '../CardTableWorker/CardTableWorker';
import { useAppSelector } from '../../app/hooks';
import { selectOrdersWorker } from '../../features/ordersWorkerSlice';
import { Droppable } from 'react-beautiful-dnd';
import { InitialState } from '../TableWorker/TableWorker';

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
};

export const ColumnTableWorker = ({ name, table }: Props) => {
	const tableInfo = table;
	return (
		<Flex
			className={`${styles.column} ${styles[name]}`}
			vertical
			gap="17px"
		>
			<Flex align="center" gap="15px">
				<Image src={typesColumn[name].srcImage} preview={false} />
				<Typography.Text className={styles.title_column}>
					{typesColumn[name].title}
				</Typography.Text>
			</Flex >
			<Droppable droppableId={name}>
				{(provided) => (
					<Flex {...provided.droppableProps} ref={provided.innerRef} className={styles.cards} gap="17px" vertical>
						{tableInfo[name].cards.map((card, index) => (
							<CardTableWorker
								key={card.id}
								id={card.id}
								name={name}
								index={index}
								table={tableInfo}
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
