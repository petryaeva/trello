import Column from './Column/Column';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getColumns } from './Column/columnSelectors';
import Button from './Button/Button';
import { MdOutlineAdd } from 'react-icons/md';
import { COLORS } from './styles/colors';
import { useCallback } from 'react';
import { createColumn } from './redux/trelloActionCreators';
import { nanoid } from '@reduxjs/toolkit';

function App() {
	const lists = useSelector(getColumns);
	const dispatch = useDispatch();
	
	const handleCreateColumn = useCallback(() => {
		const id = nanoid(5);
		console.log(id)

		dispatch(createColumn(id));
	}, [dispatch]);

	return (
		<div className="app">
			<header className="header">Like Trello</header>
			<main className="main-content">
				{lists && lists.map(({id, title, tasks}) => <Column key={id} id={id} title={title} tasks={tasks} />)}

				<Button text="Добавить колонку" onClick={handleCreateColumn}>
					<MdOutlineAdd
						color={COLORS.gray800}
						size={18}
						className="btn-icon"
					/>
				</Button>
			</main>
		</div>
	);
}

export default App;
