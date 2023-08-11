import { Modal } from './modal/Modal';

import { EditTaskProps } from '../models/Task';

export const EditTask = ({
  tasklist,
  setTasklist,
  task,
  setTask,
  isOpen,
  toggleEditMode,
}: EditTaskProps) => {
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
      setTask({});
      toggleEditMode();
    }
  };

  return (
    <Modal title='Edit Task' isOpen={isOpen} toggleClose={toggleEditMode}>
      <section className='editTask'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='task'
            value={task.name || ''}
            autoComplete='off'
            maxLength={25}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <div className='flex-h rt'>
            <span className='cancel' onClick={() => toggleEditMode()}>
              {'Cancel'}
            </span>
            <button type='submit' className='update'>
              {'Update'}
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
};
