import { Task, TaskProps } from '../common/Task';

export const AddTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
}: TaskProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist([...updatedTasklist]);
    } else {
      const date = new Date();
      const newTask: Task = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newTask]);
      setTask({});
      e.target.task.value = '';
    }
  };

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          value={task.name}
          autoComplete='off'
          placeholder='add task'
          maxLength={25}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type='submit'>Add</button>
      </form>
    </section>
  );
};
