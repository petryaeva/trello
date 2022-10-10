import { useState } from 'react';
import cn from 'classnames';
import './task.scss';
import { ITrelloTask } from '../redux/trelloReduxTypes';
import { useDispatch } from 'react-redux';
import { ENTER_KEY } from '../app/constants';
import { updateTask } from '../redux/trelloActionCreators';

type Props = {columnID: number} & ITrelloTask;

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
	<article className="task">
		<div className="task__text" key={id} onClick={setActiveTextarea}>
			{text}
		</div>
		<textarea
			onChange={getEditedText}
			onKeyDown={setEditedText}
			value={newText}
			autoFocus
			className={cn('task__textarea', {'task__textarea--visible': isEditTask})}
			aria-label={newText}
		>
			{newText}
		</textarea>
	</article>
  );
}

export default Task;
