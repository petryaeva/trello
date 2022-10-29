import * as types from './trelloActionTypes';
import {
	ICreateColumn,
	ICreateTask,
	ISetColumnTitle,
	IUpdateTask,
} from './trelloReduxTypes';

export const setColumnTitle = (title: string, id: string): ISetColumnTitle => ({
	type: types.SET_COLUMN_TITLE,
	payload: {id, title},
});

export const createTask = (text: string, id: string, columnID: string): ICreateTask => ({
	type: types.CREATE_TASK,
	payload: {id, text, columnID},
});

export const updateTask = (text: string, id: string, columnID: string): IUpdateTask => ({
	type: types.UPDATE_TASK,
	payload: {id, text, columnID},
});

export const createColumn = (id: string): ICreateColumn => ({
	type: types.CREATE_COLUMN,
	payload: id,
});
