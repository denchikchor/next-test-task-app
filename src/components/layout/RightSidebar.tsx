'use client';

import { ProfileSidebar } from '@/features/settings/components/ProfileSidebar';

export default function RightSidebar() {
  return (
    <aside className="border-border-soft fixed inset-y-0 right-0 z-40 hidden h-screen w-[340px] border-l bg-white lg:flex">
      <div className="w-full overflow-y-auto p-6">
        <ProfileSidebar progress={75} name="User R." role="Developer at White Digital" />
      </div>
    </aside>
  );
}
