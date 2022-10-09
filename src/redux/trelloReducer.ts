import { TrelloState } from './trelloReduxTypes';
import * as types from './trelloActionTypes';

export const initialState: TrelloState = {
	lists: [{
		id: 0,
		title: 'Some title',
		tasks: [],
	}],
};

export default function trelloReducer(
	state = initialState,
	action,
): TrelloState {
	switch (action.type) {
		case types.SET_COLUMN_TITLE: {
			const {id, title} = action.payload;
			const updatedColumn = state.lists.map(item => {
				return item.id === id ? {...item, title} : item;
			});
 
			return {
				lists: updatedColumn,
			};
		}

		default: return state;
	}
}
