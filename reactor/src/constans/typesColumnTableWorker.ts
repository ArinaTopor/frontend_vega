import { InfoColumns } from '../utils/InfoColumnsTableWorker';
import srcSquare from '../assets/icons/square.svg';
import srcClock from '../assets/icons/clock.svg';
import srcReady from '../assets/icons/ready.svg';

export const typesColumnTableWorker: InfoColumns = {
	made: {
		srcImage: srcSquare,
		title: 'Сделать',
	},
	process: {
		srcImage: srcClock,
		title: 'В процессе',
	},
	ready: {
		srcImage: srcReady,
		title: 'Готово',
	},
};