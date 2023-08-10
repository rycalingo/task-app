import { Modal } from './modal/Modal';

import { EditTaskProps } from '../scripts/Task';
export const EditTask = ({ isOpen }: EditTaskProps) => {
  return (
    <Modal title='Edit Task' isOpen={isOpen}>
      <div>Edit Task</div>
    </Modal>
  );
};
