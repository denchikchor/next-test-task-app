import { z } from 'zod';

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(['to-do', 'in-progress', 'review', 'completed']),
  createdAt: z.string().datetime(),
});

export const tasksSchema = z.array(taskSchema);
