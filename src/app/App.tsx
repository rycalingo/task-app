import { useState } from 'react';
import { AddTask } from '../components/AddTask';
import { Header } from '../components/Header';
import { ShowTask } from '../components/ShowTask';
import { Task } from '../common/Task';

import './App.css';

function App() {
  const [tasklist, setTasklist] = useState<Task[]>([]);
  const [task, setTask] = useState({});

  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <AddTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
