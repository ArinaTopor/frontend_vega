import { Card, Flex, Image, Typography } from 'antd';
import styles from './ColumnTableWorker.module.css'
import srcSquare from '../../assets/icons/square.svg'
import srcClock from '../../assets/icons/clock.svg'
import srcReady from '../../assets/icons/ready.svg'
import { CardTableWorker } from '../CardTableWorker/CardTableWorker';
import { useAppSelector } from '../../app/hooks';
import {  selectOrdersWorker } from '../../features/ordersWorkerSlice';

type InfoColumns={
	[key: string] : {
		srcImage: string,
		title:  string
	}
}

const typesColumn: InfoColumns={
	made: {
		srcImage: srcSquare,
		title: 'Сделать'
	},
	process: {
		srcImage: srcClock,
		title: 'В процессе'
	},
	ready:{
		srcImage: srcReady,
		title: 'Готово'
	}
}

type Props={
	name: string
}

export const ColumnTableWorker=({name}: Props)=>{
	const tableInfo = useAppSelector(selectOrdersWorker)
	return(
		<Flex className={`${styles.column} ${styles[name]}`} vertical gap='17px'>
			<Flex align='center' gap='15px'>
				<Image src={typesColumn[name].srcImage} preview={false}/>
				<Typography.Text className={styles.title_column}>{typesColumn[name].title}</Typography.Text>
			</Flex>
			{
				tableInfo[name].cards.map(card => <CardTableWorker key={card.id} id={card.id} name={name}/>)
			}
		</Flex>
	)
}