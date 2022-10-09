import Column from './columns/Column';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">Like Trello</header>
	  <main className="main-content">
		<Column />
	  </main>
    </div>
  );
}

export default App;
