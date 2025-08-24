'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';
import SettingsIcon from '../icons/SettingsIcon';
import DashboardIcon from '../icons/DashboardIcon';

const NAV = [
  { href: '/', label: 'Dashboard', iconComponent: DashboardIcon },
  { href: '/settings', label: 'Setting', iconComponent: SettingsIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden h-screen w-[240px] flex-col justify-between bg-white md:flex">
      <div>
        <div className="flex items-center gap-3 px-6 pt-6 pb-4">
          <div className="bg-brand-orange grid size-8 place-items-center rounded-full text-lg font-semibold text-white">
            C
          </div>
          <div className="text-xl font-semibold tracking-wide">TESTAPP</div>
        </div>

        <nav className="mt-6 space-y-2 px-6">
          {NAV.map(({ href, label, iconComponent: IconComponent }) => {
            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-2 py-2 transition-colors',
                  active ? 'text-brand-green' : 'text-nav-muted hover:text-foreground',
                )}
              >
                <IconComponent className="size-5" />
                <span className="text-base font-light">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-center gap-3">
          <div className="bg-avatar size-8 rounded-full border" />
          <div>
            <div className="text-xs font-medium text-black">User R.</div>
            <div className="text-nav-muted text-[10px]">test-mail@email.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
