import React, { SetStateAction } from 'react';

type Task = {
  id: number;
  name: string;
  time: string;
};

interface ShowTaskProps {
  tasklist: Task[];
  setTasklist: React.Dispatch<SetStateAction<Task[]>>;
}

export const ShowTask: React.FC<ShowTaskProps> = ({
  tasklist,
  setTasklist,
}: ShowTaskProps) => {
  return (
    <section className='showTask'>
      <p className='head'>
        <span>
          <span className='title'>Todo</span>
          <span className='count'>
            {tasklist?.length ? tasklist.length : 0}
          </span>
        </span>
        <span className='clearAll'>Clear All</span>
      </p>
      <ul>
        {tasklist?.map((task: Task) => (
          <li key={task.id && task.id}>
            <p>
              <span className='name'>{task.name ? task.name : 'New Task'}</span>
              <span className='time'>
                {task.time ? task.time : '00:00 05/31/2030'}
              </span>
            </p>
            <i className='bi bi-pencil-square'></i>
            <i className='bi bi-trash'></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
