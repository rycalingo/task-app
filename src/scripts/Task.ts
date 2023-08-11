import { Dispatch, SetStateAction } from 'react'

export type Task = {
  id?: number;
  name?: string;
  time?: string;
};

export interface TaskProps {
  task: Task,
  setTask: Dispatch<SetStateAction<Task|{}>>,
  tasklist: Task[] | [],
  setTasklist: Dispatch<SetStateAction<Task[]|[]>>,
}

export interface ShowTaskProps extends TaskProps {
  toggleEditMode(): void;
}

export interface EditTaskProps extends ShowTaskProps {
  isOpen: boolean,
}