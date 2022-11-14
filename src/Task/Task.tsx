import { useState } from 'react';
import { ITrelloTask } from '../redux/trelloReduxTypes';
import { useDispatch } from 'react-redux';
import { ENTER_KEY } from '../app/constants';
import { updateTask } from '../redux/trelloActionCreators';
import { TaskEditor, TaskStyled } from './TaskStyled';

type Props = {columnID: string} & ITrelloTask;

function Task({id, text, columnID}: Props) {
	const dispatch = useDispatch();
	const [newText, setNewText] = useState(text);
	const [isEditTask, setIsEditTask] = useState(false);

	const setActiveTextarea = () => {
		// TODO: add focus on textarea when click by task
		// headerRef.current?.focus();
		setIsEditTask(true);
	}

	const getEditedText = (event) => {
		const text = event.target.value;

		setNewText(text);
	};

	const setEditedText = (event) => {
		if (event.keyCode === ENTER_KEY) {
			event.preventDefault();
			dispatch(updateTask(newText, id, columnID));
			setIsEditTask(false);
		}
	};

  return (
	<TaskStyled>
		<div key={id} onClick={setActiveTextarea}>
			{text}
		</div>
		<TaskEditor
			isEditTask={isEditTask}
			onChange={getEditedText}
			onKeyDown={setEditedText}
			value={newText}
			autoFocus
			aria-label={newText}
		>
			{newText}
		</TaskEditor>
	</TaskStyled>
  );
}

export default Task;
