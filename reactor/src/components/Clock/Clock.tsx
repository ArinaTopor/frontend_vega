import { Typography } from 'antd';
import { useEffect, useState } from 'react';
import styles from './Clock.module.css'

export const Clock = () => {
	const [time, setTime] = useState(new Date());
	useEffect(()=>{
		const interval = setInterval(()=>{
			setTime(new Date())
		}, 1000);
		return () => clearInterval(interval);
	},[])

	const hours = String(time.getHours()).padStart(2,'0');
  	const minutes = String(time.getMinutes()).padStart(2,'0');

	const timeString = `${hours}:${minutes}`

	return(
		<Typography.Text className={styles.time}>{timeString}</Typography.Text>
	)
}