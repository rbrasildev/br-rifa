// import './css/admin.css';
import Image from 'next/image';
import {
  MdShoppingCart,
  MdAutoGraph,
  MdSettings,
  MdMenuBook,
  MdPhoneCallback,
  MdLogout
} from 'react-icons/md';
import { LuTicket } from 'react-icons/lu';
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
      <main className="ml-[280px] p-3">{children}</main>
    </div>
  );
}
