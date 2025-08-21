'use client';

import CircularProgress from '@/components/ui/CircularProgress';

type Props = {
  progress: number;
  name: string;
  role: string;
};

export function ProfileSidebar({ progress, name, role }: Props) {
  const pct = Math.max(0, Math.min(100, progress));

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4">
        <h3 className="text-[20px] font-semibold">My Profile</h3>
        <p className="mt-1 text-[14px]">
          <span className="text-brand-green">{pct}%</span>{' '}
          <span className="text-brand-green">completed your profile</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <CircularProgress
          value={75}
          size={100}
          strokeWidth={3}
          contentInset={1}
          className="text-brand-green"
        >
          <div className="bg-avatar size-20 rounded-full" />
        </CircularProgress>

        <div className="mt-4 text-center">
          <div className="text-[16px] font-medium">{name}</div>
          <div className="text-nav-muted text-[14px]">{role}</div>
        </div>
      </div>

      <hr className="border-card-border my-6" />

      <div className="flex-1" />

      <button className="bg-button-red h-10 w-full rounded-[4px] font-medium text-white">
        Logout
      </button>
    </div>
  );
}
