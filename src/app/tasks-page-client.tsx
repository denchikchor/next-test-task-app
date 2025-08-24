'use client';

import { useTasksQuery } from '@/features/tasks/hooks/useTasksQuery';
import { TaskBoardSkeleton } from '@/features/tasks/components/TaskBoardSkeleton';
import { ErrorState } from '@/shared/components/common/ErrorState';
import { EmptyState } from '@/shared/components/common/EmptyState';
import { TaskBoard } from '@/features/tasks/components/TaskBoard';

export default function TasksPageClient() {
  const { data, isLoading, error, refetch } = useTasksQuery();

  if (isLoading) return <TaskBoardSkeleton />;
  if (error)
    return (
      <div className="p-6">
        <ErrorState message={(error as Error).message} onRetry={() => refetch()} />
      </div>
    );
  if (!data?.length)
    return (
      <div className="p-6">
        <EmptyState />
      </div>
    );

  return <TaskBoard tasks={data} />;
}
