'use client';

import RightSidebar from '@/components/layout/RightSidebar';
import { SettingsForm } from '@/features/settings/components/SettingsForm';
import { formatHeaderDate } from '@/shared/lib/format';

export default function SettingsPageClient() {
  const { dow, date } = formatHeaderDate();

  return (
    <>
      <RightSidebar />
      <div className="min-h-screen bg-slate-50 lg:mr-[340px]">
        <div className="px-6 py-8">
          <header>
            <h1 className="text-title-dark text-xl font-medium">Settings</h1>
            <p className="mt-1 text-sm">
              <span className="text-brand-green">{dow}</span>
              <span className="text-slate-400">, {date}</span>
            </p>
          </header>

          <section className="mt-8">
            <SettingsForm />
          </section>
        </div>
      </div>
    </>
  );
}
