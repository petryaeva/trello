// import { } from './trelloReduxTypes';
import * as types from './trelloActionTypes';

export const setColumnTitle = (title: string, id: number) => ({
	type: types.SET_COLUMN_TITLE,
	payload: {id, title},
});
