import Column from './Column/Column';
import './App.scss';
import { useSelector } from 'react-redux';
import { getColumns } from './Column/columnSelectors';

function App() {
  const lists = useSelector(getColumns);

  return (
    <div className="App">
      <header className="header">Like Trello</header>
      <main className="main-content">
        {lists.map(({id, title, tasks}) => <Column key={id} id={id} title={title} tasks={tasks} />)}
      </main>
    </div>
  );
}

export default App;
