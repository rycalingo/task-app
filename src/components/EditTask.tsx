import { Modal } from './modal/Modal';

import { EditTaskProps } from '../scripts/Task';

export const EditTask = ({
  task,
  setTask,
  isOpen,
  toggleEditMode,
}: EditTaskProps) => {
  return (
    <Modal title='Edit Task' isOpen={isOpen}>
      <section className='editTask'>
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
      </section>
    </Modal>
  );
};
