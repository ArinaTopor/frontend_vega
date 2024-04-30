import { Flex, Image } from 'antd';
import styles from './CardTableWorker.module.css'
import srcUser from '../../assets/image/user.png'
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectOrdersWorker, update } from '../../features/ordersWorkerSlice';
import { IColumnTableWorker } from '../../utils/IColumnTableWorker';
import { ICardTableWorker } from '../../utils/ICardTableWorker';

type Props={
	id: number
	name: string
}



export const CardTableWorker= ({id , name}: Props)=>{
	const tableInfo = useAppSelector(selectOrdersWorker)
	const [currentCard, setCurrentCard] = useState(tableInfo[name].cards.find(card => card.id === id))



	return(
			<Flex className={styles.card} vertical gap='15px' >
				<Flex justify='center'>
				{
					name === 'process' || name === 'ready' ? <Image src={srcUser} preview={false} className={styles.image}/>: ''
				}
				</Flex>
				{currentCard?.name}
			</Flex>
	)
}