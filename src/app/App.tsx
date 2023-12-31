import { useState } from 'react';
import { Header } from '../components/Header';
import { ShowTask } from '../components/ShowTask';
import { AddTask } from '../components/AddTask';
import { EditTask } from '../components/EditTask';
import { Task } from '../models/Task';

import './App.css';

import { themeList } from '../content/theme';

function App() {
  const [tasklist, setTasklist] = useState<Task[] | []>([]);
  const [task, setTask] = useState<Task | {}>({});

  const [inEditMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(!inEditMode);

  return (
    <div className='App'>
      <div className='container'>
        <Header themeList={themeList} />
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
          toggleEditMode={toggleEditMode}
        />
        <EditTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
          isOpen={inEditMode}
          toggleEditMode={toggleEditMode}
        />
      </div>
    </div>
  );
}

export default App;
