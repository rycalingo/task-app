import { useState } from 'react';
import { AddTask } from '../components/AddTask';
import { Header } from '../components/Header';
import { ShowTask } from '../components/ShowTask';

import { data } from '../models/data';

import './App.css';

function App() {
  const [tasklist, setTasklist] = useState([...data]);

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
