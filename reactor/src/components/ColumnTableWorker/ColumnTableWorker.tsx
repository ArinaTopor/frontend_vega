import {Flex, Image, Typography } from 'antd';
import styles from './ColumnTableWorker.module.css';
import { CardTableWorker } from '../CardTableWorker/CardTableWorker';
import { InitialState} from '../../features/tasksWorkerSlice';
import { Droppable } from 'react-beautiful-dnd';
import { typesColumnTableWorker } from '../../constans/typesColumnTableWorker';

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
			gap="0.88vw"
		>
			<Flex align="center" gap="0.78vw">
				<Image src={typesColumnTableWorker[name].srcImage} preview={false} />
				<Typography.Text className={styles.title_column}>
					{typesColumnTableWorker[name].title}
				</Typography.Text>
			</Flex >
			<Droppable droppableId={name}>
				{(provided) => (
					<Flex {...provided.droppableProps} ref={provided.innerRef} className={styles.cards} gap="0.88vw" vertical>
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
