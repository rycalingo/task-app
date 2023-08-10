import { Dispatch, SetStateAction } from 'react'

export type Task = {
  id?: number;
  name?: string;
  time?: string;
};

export interface TaskProps {
  tasklist: Task[] | [],
  setTasklist: Dispatch<SetStateAction<Task[]|[]>>,
  task: Task,
  setTask: Dispatch<SetStateAction<Task|{}>>,
}

export interface ShowTaskProps extends TaskProps {
  toggleEditMode: Function,
}

export interface EditTaskProps {
  isOpen: boolean,
  toggleEditMode: Function,
}