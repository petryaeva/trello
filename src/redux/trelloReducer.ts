import { TrelloState } from './trelloReduxTypes';
import * as types from './trelloActionTypes';

export const initialState: TrelloState = {
	lists: [{
		id: 'column-0',
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

		case types.CREATE_TASK: {
			const {columnID, text, id} = action.payload;

			return {
				lists: state.lists.map(item => {
					if (item.id === columnID) {
						return {...item, tasks: [...item.tasks, {id, text}]}
					} else {
						return item;
					}
				}),
			};
		}

		case types.UPDATE_TASK: {
			const {columnID, text, id} = action.payload;

			return {
				lists: state.lists.map(item => {
					if (item.id === columnID) {
						const updatedTask = item.tasks.map(task => task.id === id
							? {...task, text}
							: task
						);

						return {...item, tasks: updatedTask}
					} else {
						return item;
					}
				}),
			};
		}

		case types.CREATE_COLUMN: {
			return {
				lists: state.lists.concat({
					id: action.payload,
					title: 'Some title',
					tasks: [],
				})
			};
		}

		default: return state;
	}
}
