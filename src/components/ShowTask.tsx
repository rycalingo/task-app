import { Task, TaskProps } from '../common/Task';

export const ShowTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
}: TaskProps) => {
  const handleEdit = (id: number) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    console.log(selectedTask);
    if (selectedTask) setTask(selectedTask);
  };

  const handleDelete = (id: number) => {
    const updatedTaskList = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTaskList);
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
        {tasklist?.map((task: Task) => (
          <li key={task.id && task.id}>
            <p>
              <span className='name'>{task.name ? task.name : 'New Task'}</span>
              <span className='time'>
                {task.time ? task.time : '00:00 05/31/2030'}
              </span>
            </p>
            <i
              onClick={() => handleEdit(task.id)}
              className='bi bi-pencil-square'
            ></i>
            <i
              onClick={() => handleDelete(task.id)}
              className='bi bi-trash'
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
