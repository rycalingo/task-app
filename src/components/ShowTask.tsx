import { Task, ShowTaskProps } from '../scripts/Task';

export const ShowTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
  toggleEditMode,
}: ShowTaskProps) => {
  const handleEdit = (id: number) => {
    if (tasklist.length !== 0 && id !== 0) {
      const selectedTask = tasklist.find((todo) => todo.id === id);
      if (selectedTask) setTask(selectedTask);
      toggleEditMode();
    }
  };

  const handleDelete = (id: number) => {
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
                <span className='flex-v'>
                  <span onClick={() => handleEdit(task.id || 0)}>
                    <i className='bi bi-pencil-square'></i>
                  </span>
                  <span>&nbsp;</span>
                </span>
                <p>
                  <span className='name'>
                    {task.name !== undefined ? task.name : 'New Task'}
                  </span>
                  <span className='time'>
                    {task.time ? task.time : '00:00 05/31/2030'}
                  </span>
                </p>
                <span className='flex-v'>
                  <span>&nbsp;</span>
                  <span onClick={() => handleDelete(task.id || 0)}>
                    <i className='bi bi-trash'></i>
                  </span>
                </span>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};
