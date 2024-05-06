import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import styles from './Clock.module.css'

export const Clock = () => {
	const [time, setTime] = useState(new Date());
	useEffect(()=>{
		setInterval(()=>{
			setTime(new Date())
		}, 1000)
	},[])

	const hours = time.getHours();
  	const minutes = time.getMinutes();

	const timeString = `${hours}:${minutes}`

	return(
		<Typography.Text className={styles.time}>{timeString}</Typography.Text>
	)
}