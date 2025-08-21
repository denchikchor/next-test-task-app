'use client';

import { Card } from '@/components/ui/card';
import { MoreHorizontal, Clock3 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  description: string;
  date: string;
  className?: string;
};

export function TaskCard({ title, description, date, className }: Props) {
  return (
    <Card
      className={cn(
        'h-[216px] w-full rounded-[8px] border-0 bg-white shadow-none',
        'flex flex-col p-4',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <h3 className="text-[16px] leading-none font-medium text-slate-900 first-letter:uppercase">
          {title}
        </h3>
        <button aria-label="more" className="text-bullets hover:opacity-80">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <p className="text-brand-grey line-clamp-3 text-[14px] leading-6 font-light">{description}</p>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span
          className={cn(
            'inline-flex items-center gap-1.5',
            'h-[28px] min-w-[84px] rounded-[4px] px-3',
            'bg-brand-green text-[12px] font-light text-white',
          )}
        >
          <Clock3 size={16} />
          {date}
        </span>

        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="bg-avatar h-8 w-8 rounded-full border border-white"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
