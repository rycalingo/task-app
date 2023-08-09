import { TaskProps } from '../common/Task';

export const AddTask: React.FC<TaskProps> = ({ tasklist, setTasklist }) => {
  return (
    <section className='addTask'>
      <form>
        <input
          type='text'
          name='task'
          autoComplete='off'
          placeholder='add task'
          maxLength={25}
        />
        <button type='submit'>Add</button>
      </form>
    </section>
  );
};
