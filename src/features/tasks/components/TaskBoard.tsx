import { Task } from '../model/types';
import { TaskCard } from './TaskCard';
import { formatDayMonthISO, formatHeaderDate } from '@/shared/lib/format';
import { cn } from '@/lib/utils';

type ColumnDef = {
  key: 'to-do' | 'in-progress' | 'review' | 'completed';
  title: string;
};

const COLUMNS: ColumnDef[] = [
  { key: 'to-do', title: 'To do' },
  { key: 'in-progress', title: 'In progress' },
  { key: 'review', title: 'Review' },
  { key: 'completed', title: 'Completed' },
];

export function TaskBoard({ tasks }: { tasks: Task[] }) {
  const byStatus = (k: ColumnDef['key']) => tasks.filter((t) => t.status === k);
  const { dow, date } = formatHeaderDate();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1200px] px-6 pb-10">
        <header className="py-6">
          <h1 className="text-[28px] font-semibold text-slate-900">My Tasks</h1>
          <p className="mt-1 text-[16px]">
            <span className="text-brand-green">{dow}</span>
            <span className="text-slate-400">, {date}</span>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COLUMNS.map((col) => {
            const list = byStatus(col.key);
            return (
              <section key={col.key}>
                <h2 className="mb-3 text-[15px] font-semibold text-slate-700">
                  {col.title} <span className="text-slate-400">({list.length})</span>
                </h2>

                <div className="space-y-4">
                  {list.map((t) => (
                    <TaskCard
                      key={t.id}
                      title={t.title}
                      description={t.description}
                      date={formatDayMonthISO(t.createdAt)}
                    />
                  ))}

                  {Array.from({ length: Math.max(0, 3 - list.length) }).map((_, i) => (
                    <div
                      key={`placeholder-${i}`}
                      className="border-cardBorder hidden h-[216px] w-full rounded-[8px] border-2 border-dashed bg-white/40 md:block"
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
