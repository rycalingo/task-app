import { Task, TaskProps } from '../scripts/Task';

export const ShowTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
}: TaskProps) => {
  const handleEdit = (id: number | null) => {
    if (task.id === undefined) {
      const selectedTask = tasklist.find((todo) => todo.id === id);
      console.log(selectedTask);
      if (selectedTask) setTask(selectedTask);
    }
  };

  const handleDelete = (id: number | null) => {
    if (id !== null) {
      const updatedTaskList = tasklist.filter((todo) => todo.id !== id);
      setTasklist(updatedTaskList);
    }
  };

  return (
    <section className='showTask'>
      <p className='head'>
        <span>
          <span className='title'>Todo</span>
          <span className='count'>
            {tasklist?.length ? tasklist.length : 0}
          </span>
        </span>
        <span className='clearAll' onClick={() => setTasklist([])}>
          Clear All
        </span>
      </p>
      <ul>
        {tasklist.length !== 0
          ? tasklist?.map((task: Task, i) => (
              <li key={task.id !== undefined ? task.id : i}>
                <p>
                  <span className='name'>
                    {task.name !== undefined ? task.name : 'New Task'}
                  </span>
                  <span className='time'>
                    {task.time ? task.time : '00:00 05/31/2030'}
                  </span>
                </p>
                <i
                  onClick={() =>
                    handleEdit(task.id !== undefined ? task.id : null)
                  }
                  className='bi bi-pencil-square'
                ></i>
                <i
                  onClick={() =>
                    handleDelete(task.id !== undefined ? task.id : null)
                  }
                  className='bi bi-trash'
                ></i>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};
