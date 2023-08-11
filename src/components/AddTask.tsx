import { Task, TaskProps } from '../scripts/Task';

export const AddTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
}: TaskProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const date = new Date();
    const newTask: Task = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    setTasklist([...tasklist, newTask]);
    setTask({});
  };

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          value={task.name || ''}
          autoComplete='off'
          placeholder='add task'
          maxLength={25}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type='submit'>{task.id ? 'Update' : 'Add'}</button>
      </form>
    </section>
  );
};
