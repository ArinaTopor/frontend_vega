import { Flex, Image, Typography } from 'antd';
import styles from './TableWorker.module.css'
import srcSquare from '../../assets/icons/square.svg'
import { ColumnTableWorker } from '../ColumnTableWorker/ColumnTableWorker';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectOrdersWorker } from '../../features/ordersWorkerSlice';

export const TableWorker= ()=>{
	const tableInfo = useAppSelector(selectOrdersWorker)

	return(
		<Flex className={styles.table} gap='30px'>
			<Flex className={styles.column}  gap='17px'>
				{
					Object.keys(tableInfo).map(column => <ColumnTableWorker key={column} name={column} />)
				}
			</Flex>
		</Flex>
	)
}