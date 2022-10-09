// export type DefaultSelectOptions = Omit<SelectOptions, 'value'> & {value: number[]};

import { SET_COLUMN_TITLE } from './trelloActionTypes';

export interface ITrelloTask {
	id: number,
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

export type ITrelloActionsTypes = ISetColumnTitle;
	// | ISetCvHistorySeancesAction;
