import { Flex } from 'antd';
import styles from './TableWorker.module.css';
import { ColumnTableWorker } from '../ColumnTableWorker/ColumnTableWorker';
import {useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { InitialState, selectOrdersWorker, update } from '../../features/ordersWorkerSlice';

export const TableWorker = () => {
	const dispatch = useAppDispatch();
	const [tableInfo, setTableInfo] = useState<InitialState>(useAppSelector(selectOrdersWorker));

	const handleOnDragEnd = ({ source, destination }: DropResult) => {

		if (
			!destination ||
			destination.droppableId === 'made' ||
			(destination.droppableId === 'process' &&
				source.droppableId === 'ready')
		)
			return;

		const itemSourceIndex = source.index;
		const itemDestinationIndex = destination?.index
			? destination?.index
			: 0;

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
		newDestinationItems?.splice(itemDestinationIndex, 0, deletedItem);
		const newStores = { ...tableInfo };

		newStores[source.droppableId] = {
			...tableInfo[source.droppableId],
			cards: newSourceItems,
		};
		newStores[droppableIdDestination] = {
			...tableInfo[droppableIdDestination],
			cards: newDestinationItems,
		};
		setTableInfo(newStores);
		dispatch(update(newStores));
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Flex className={styles.table} gap="30px">
				<Flex className={styles.column} gap="17px">
					{Object.keys(tableInfo).map((column) => (
						<ColumnTableWorker name={column} table={tableInfo} key={column}/>
					))}
				</Flex>
			</Flex>
		</DragDropContext>
	);
};
