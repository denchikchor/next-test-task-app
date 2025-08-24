'use client';

import { Button } from '@/shared/components/ui/button';
import CircularProgress from '@/shared/components/ui/CircularProgress';

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
        <h3 className="text-xl font-semibold">My Profile</h3>
        <p className="mt-1 text-sm">
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
          <div className="text-base font-medium">{name}</div>
          <div className="text-nav-muted text-sm">{role}</div>
        </div>
      </div>

      <hr className="border-card-border my-6" />

      <div className="flex-1" />

      <Button className="w-full" variant="logout" size="lg">
        Logout
      </Button>
    </div>
  );
}
