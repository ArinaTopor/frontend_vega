import { ICardTableWorker } from './ICardTableWorker';

export interface IColumnTableWorker{
	name: string
	cards: Array<ICardTableWorker>
}