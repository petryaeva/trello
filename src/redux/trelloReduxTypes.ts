import { CREATE_TASK, SET_COLUMN_TITLE, UPDATE_TASK } from './trelloActionTypes';

export interface ITrelloTask {
	id: string,
	text: string,
}

export interface ITrelloList {
	id: number,
	title: string,
	tasks: ITrelloTask[],
}

export type TrelloState = {
	lists: ITrelloList[];
};


export interface ISetColumnTitle {
	type: typeof SET_COLUMN_TITLE;
	payload: Pick<ITrelloList, 'id' | 'title'>;
}

export interface ICreateTask {
	type: typeof CREATE_TASK;
	payload: ITrelloTask & {columnID: number};
}

export interface IUpdateTask {
	type: typeof UPDATE_TASK;
	payload: ITrelloTask & {columnID: number};
}

export type ITrelloActionsTypes = ISetColumnTitle
	| ICreateTask
	| IUpdateTask;
