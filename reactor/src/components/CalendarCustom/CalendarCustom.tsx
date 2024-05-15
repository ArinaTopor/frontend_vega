import { Calendar } from 'antd';
import styles from './CalendarCustom.module.css'

export const CalendarCustom= ()=> {
	return(
		<div className={styles.wrapper}>
			<Calendar fullscreen={false}/>
		</div>
	)
}