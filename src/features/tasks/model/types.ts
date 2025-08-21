export type TaskStatus = 'to-do' | 'in-progress' | 'review' | 'completed';

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
};
