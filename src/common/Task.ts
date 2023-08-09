import { Dispatch, SetStateAction } from 'react'

export type Task = {
  id: number;
  name: string;
  time: string;
};

export interface TaskProps {
  tasklist: [] | Task[];
  setTasklist: Dispatch<SetStateAction<Task[]>>;
}