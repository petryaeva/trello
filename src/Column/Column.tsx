import { useState, useCallback } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { COLORS } from '../styles/colors';
import Button from '../Button/Button';
import { ITrelloList } from '../redux/trelloReduxTypes';
import { useDispatch } from 'react-redux';
import { createTask, setColumnTitle } from '../redux/trelloActionCreators';
import { ENTER_KEY } from '../app/constants';
import Task from '../Task/Task';
import { nanoid } from '@reduxjs/toolkit';
import { ColumnContent, ColumnHeader, ColumnHeaderEditor, ColumnStyled } from './ColumnStyled';

function Column({id, title, tasks}: ITrelloList) {
	const dispatch = useDispatch();
	const [header, setHeader] = useState(title);
	const [isEditHeader, setIsEditHeader] = useState(false);

	const setActiveTextarea = () => {
		// TODO: add focus on textarea when click by header
		// headerRef.current?.focus();
		setIsEditHeader(true);
	}

	const getEditedHeader = (event) => {
		const text = event.target.value;

		setHeader(text);
	};

	const setEditedHeader = (event) => {
		if (event.keyCode === ENTER_KEY) {
			event.preventDefault();
			dispatch(setColumnTitle(header, id));
			setIsEditHeader(false);
		}
	};

	const handleCreateTask = useCallback(() => {
		const defaultText = 'Some text';
		const taskID = nanoid(5);

		dispatch(createTask(defaultText, taskID, id));
	}, [id]);

	return (
		<ColumnStyled tabIndex={1} key={id}>
			<ColumnHeader onFocus={setActiveTextarea} onClick={setActiveTextarea}>
				<h2 className="g--ellipsis" tabIndex={2}>{header}</h2>
				<ColumnHeaderEditor
					isEditHeader={isEditHeader}
					onChange={getEditedHeader}
					onKeyDown={setEditedHeader}
					value={header}
					autoFocus
					aria-label={header}
					maxLength={100}
				/>
			</ColumnHeader>

			{!!tasks.length &&
				<ColumnContent>
					{tasks.map(item => <Task key={item.id} id={item.id} text={item.text} columnID={id} />)}
				</ColumnContent>
			}

			<Button text="Добавить карточку" onClick={handleCreateTask}>
				<MdOutlineAdd
					color={COLORS.gray800}
					size={18}
					className="btn-icon"
				/>
			</Button>
		</ColumnStyled>
	);
}

export default Column;
