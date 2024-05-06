import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IColumnTableWorker } from '../utils/IColumnTableWorker';
import { RootState } from '../app/store';
import { ICardTableWorker } from '../utils/ICardTableWorker';

export type InitialState = {
	made: IColumnTableWorker;
	process: IColumnTableWorker;
	ready: IColumnTableWorker;
	[key: string]: IColumnTableWorker;
};

type PayloadColumn = {
	name: string;
	info: ICardTableWorker[];
};

const initialState: InitialState = {
	made: {
		name: 'made',
		cards: [
			{ id: 1, name: 'ACFW.00.0000', user_id: null },
			{ id: 2, name: 'ACFW.00.0025', user_id: null },
		],
	},
	process: {
		name: 'process',
		cards: [
			{ id: 4, name: 'ACFW.00.0041', user_id: 2 },
			{ id: 3, name: 'ACFW.00.0033', user_id: null },
		],
	},
	ready: {
		name: 'ready',
		cards: [
			{ id: 5, name: 'ACFW.00.0055', user_id: 5 },
			{ id: 6, name: 'ACFW.00.0098', user_id: 6 },
		],
	},
};

const slice = createSlice({
	name: 'ordersWorker',
	initialState,
	reducers: {
		update: (state, action) => {
			state.made = action.payload.made ;
			state.process = action.payload.process;
			state.ready = action.payload.ready ;
			console.log(state);
		},
		/*updateColumn: (state: InitialState,  action: PayloadAction<PayloadColumn> ) => {
			state[action.payload.name.] = {...action.payload.info}
		}*/
	},
});

export default slice.reducer;
export const { update } = slice.actions;

export const selectOrdersWorker = (state: RootState) => state.ordersWorker;
