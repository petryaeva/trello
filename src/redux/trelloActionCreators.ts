import * as types from './trelloActionTypes';
import {
	ICreateTask,
	ISetColumnTitle,
	IUpdateTask,
} from './trelloReduxTypes';

export const setColumnTitle = (title: string, id: number): ISetColumnTitle => ({
	type: types.SET_COLUMN_TITLE,
	payload: {id, title},
});

export const createTask = (text: string, id: string, columnID: number): ICreateTask => ({
	type: types.CREATE_TASK,
	payload: {id, text, columnID},
});

export const updateTask = (text: string, id: string, columnID: number): IUpdateTask => ({
	type: types.UPDATE_TASK,
	payload: {id, text, columnID},
});
