import Sidebar from '@/components/layout/Sidebar';
import './globals.css';
import Providers from './providers';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'White Digital Test',
  description: 'Next + Tailwind + shadcn/ui + TanStack Query',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-slate-50 font-sans`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-[240px]">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
