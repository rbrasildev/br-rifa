import { ReactNode } from 'react';
import Sidebar from './sidebar';
import Header from './header';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="wrap">
      <Sidebar />
      <Header />
      <main className="ml-[280px] p-16">{children}</main>
    </div>
  );
}
