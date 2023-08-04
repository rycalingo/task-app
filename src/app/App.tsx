import { AddTask } from '../components/AddTask';
import { Header } from '../components/Header';
import { ShowTask } from '../components/ShowTask';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <AddTask />
        <ShowTask />
      </div>
    </div>
  );
}

export default App;
