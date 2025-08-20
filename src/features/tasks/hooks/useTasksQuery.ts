"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client";
import { tasksSchema } from "../model/schema";
import type { Task } from "../model/types";
import { tasksKeys } from "../model/keys";

export function useTasksQuery() {
  return useQuery({
    queryKey: tasksKeys.list(),
    queryFn: async (): Promise<Task[]> => {
      const data = await api<unknown>("/tasks");
      return tasksSchema.parse(data);
    },
    staleTime: 60_000,
  });
}
