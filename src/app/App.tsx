import { useState } from 'react';
import { AddTask } from '../components/AddTask';
import { Header } from '../components/Header';
import { ShowTask } from '../components/ShowTask';
import { Task } from '../common/Task';

import './App.css';

function App() {
  const [tasklist, setTasklist] = useState<Task[]>([]);

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <AddTask />
        <ShowTask tasklist={tasklist} setTasklist={setTasklist} />
      </div>
    </div>
  );
}

export default App;
