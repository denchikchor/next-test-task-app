'use client';

import { TaskCardSkeleton } from './TaskCardSkeleton';
import { Skeleton } from '@/shared/components/ui/skeleton';

const COLUMNS = ['To do', 'In progress', 'Review', 'Completed'] as const;

export function TaskBoardSkeleton() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1200px] px-6 pb-10">
        <header className="py-6">
          <div className="items-baseline gap-3">
            <Skeleton className="h-6 w-36 rounded" />
            <Skeleton className="mt-6 h-6 w-36 rounded" />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((title) => (
            <section key={title} className="space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-10 rounded" />
              </div>

              <div className="space-y-4">
                <TaskCardSkeleton />
                <TaskCardSkeleton />
                <TaskCardSkeleton />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
