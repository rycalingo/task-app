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
        <div className='flex-h rt'>
          <span className='close-button' onClick={() => toggleEditMode()}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
            </svg>
          </span>
        </div>
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
