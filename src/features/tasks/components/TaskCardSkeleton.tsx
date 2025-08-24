'use client';

import { Card } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { cn } from '@/shared/lib/utils';

export function TaskCardSkeleton({ className }: { className?: string }) {
  return (
    <Card
      aria-hidden
      className={cn(
        'h-[216px] w-full rounded-lg border-0 bg-white shadow-none',
        'flex flex-col p-4',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <Skeleton className="h-4 w-32 rounded" />
        <div className="flex items-center gap-1">
          <Skeleton className="h-2 w-2 rounded-full" />
          <Skeleton className="h-2 w-2 rounded-full" />
          <Skeleton className="h-2 w-2 rounded-full" />
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <Skeleton className="h-3 w-[85%] rounded" />
        <Skeleton className="h-3 w-[90%] rounded" />
        <Skeleton className="h-3 w-[70%] rounded" />
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <Skeleton className="h-[28px] w-[84px] rounded-sm" />
        <div className="flex -space-x-2">
          <Skeleton className="h-8 w-8 rounded-full border border-white" />
          <Skeleton className="h-8 w-8 rounded-full border border-white" />
          <Skeleton className="h-8 w-8 rounded-full border border-white" />
        </div>
      </div>
    </Card>
  );
}
