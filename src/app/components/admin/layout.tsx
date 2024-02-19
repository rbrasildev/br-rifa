'use client'
import { ReactNode, useState } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import { LuAlignLeft } from 'react-icons/lu';
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="wrap">
      <button
        className='absolute left-4 top-5 text-2xl hidden max-sm:block max-md:block'>
        <LuAlignLeft />
      </button>
      <Sidebar />
      <Header />
      <main className="max-md:ml-0 max-sm:p-3 p-16 ml-[250px]">{children}</main>
    </div >
  );
}
