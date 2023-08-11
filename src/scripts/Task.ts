import { Dispatch, SetStateAction } from 'react'

export type Task = {
  id?: number;
  name?: string;
  time?: string;
};

export interface TaskProps {
  task: Task,
  setTask: Dispatch<SetStateAction<Task|{}>>,
}

export interface AddTaskProps extends TaskProps {
  tasklist: Task[] | [],
  setTasklist: Dispatch<SetStateAction<Task[]|[]>>,
}

export interface ShowTaskProps extends AddTaskProps {
  toggleEditMode: Function,
}

export interface EditTaskProps extends TaskProps {
  isOpen: boolean,
  toggleEditMode: Function,
}