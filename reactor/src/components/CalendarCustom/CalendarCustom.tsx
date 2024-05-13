import { Calendar } from 'antd';
import styles from './CalendarCustom.module.css'
import locale from "dayjs/locale/ru";

export const CalendarCustom= ()=> {
	return(
		<div className={styles.wrapper}>
			<Calendar fullscreen={false}/>
		</div>
	)
}