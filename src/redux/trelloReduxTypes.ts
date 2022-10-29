import * as type from './trelloActionTypes';

export interface ITrelloTask {
	id: string,
	text: string,
}

export interface ITrelloList {
	id: string,
	title: string,
	tasks: ITrelloTask[],
}

export type TrelloState = {
	lists: ITrelloList[];
};


export interface ISetColumnTitle {
	type: typeof type.SET_COLUMN_TITLE;
	payload: Pick<ITrelloList, 'id' | 'title'>;
}

export interface ICreateTask {
	type: typeof type.CREATE_TASK;
	payload: ITrelloTask & {columnID: string};
}

export interface IUpdateTask {
	type: typeof type.UPDATE_TASK;
	payload: ITrelloTask & {columnID: string};
}

export interface ICreateColumn {
	type: typeof type.CREATE_COLUMN;
	payload: string;
}

export type ITrelloActionsTypes = ISetColumnTitle
	| ICreateTask
	| IUpdateTask
	| ICreateColumn;
