import { Flex} from 'antd';
import styles from './TableWorker.module.css';
import { ColumnTableWorker } from '../ColumnTableWorker/ColumnTableWorker';
import { useEffect, useMemo, useState } from 'react';
import { IColumnTableWorker } from '../../utils/IColumnTableWorker';
import {
	DragDropContext,
	DropResult,
} from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectOrdersWorker, update } from '../../features/ordersWorkerSlice';

export type InitialState = {
	made: IColumnTableWorker;
	process: IColumnTableWorker;
	ready: IColumnTableWorker;
	[key: string]: IColumnTableWorker;
};

const initialState: InitialState = {
	made: {
		name: 'made',
		cards: [
			{ id: 1, name: 'ACFW.00.0000', user_id: null },
			{ id: 2, name: 'ACFW.00.0025', user_id: null },
			{ id: 3, name: 'ACFW.00.0033', user_id: null }
		],
	},
	process: {
		name: 'process',
		cards: [
			{ id: 4, name: 'ACFW.00.0041', user_id: 2 },
		],
	},
	ready: {
		name: 'ready',
		cards: [
			{ id: 5, name: 'ACFW.00.0055', user_id: 5 },
			{ id: 6, name: 'ACFW.00.0098', user_id: 6 },
		],
	},
};

export const TableWorker = () => {
	const dispatch = useAppDispatch()
	const [tableInfo, setTableInfo] = useState(
		initialState
	);
	const res = useAppSelector(selectOrdersWorker)

	useEffect(()=>{
		console.log(tableInfo)
	}, [tableInfo])

	const handleOnDragEnd = ({ source, destination }: DropResult) => {
		console.log(destination)
		if (!destination) return;

		const itemSourceIndex = source.index;
		const itemDestinationIndex = destination?.index ? destination?.index : 0;
		
		const droppableIdDestination = destination?.droppableId
			? destination?.droppableId
			: '';

		const newSourceItems = [...tableInfo[source.droppableId].cards];
		let newDestinationItems = null;
		newDestinationItems =
			source.droppableId !== droppableIdDestination
				? [...tableInfo[droppableIdDestination].cards]
				: newSourceItems;
		const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
		console.log(newDestinationItems)
		newDestinationItems?.splice(itemDestinationIndex, 0, deletedItem);
		console.log(itemDestinationIndex)
		console.log(newDestinationItems)

		const newStores = { ...tableInfo };

		newStores[source.droppableId] = {
			...tableInfo[source.droppableId],
			cards: newSourceItems,
		};
		newStores[droppableIdDestination] = {
			...tableInfo[droppableIdDestination],
			cards: newDestinationItems,
		};
		setTableInfo(newStores)
		dispatch(update(newStores))
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Flex className={styles.table} gap="30px">
				<Flex className={styles.column} gap="17px">
					{Object.keys(tableInfo).map((column) => (
						<ColumnTableWorker name={column} table={tableInfo}/>
					))}
				</Flex>
			</Flex>
		</DragDropContext>
	);
};
