'use client'
import { motion } from "framer-motion"
import { ReactNode, useState } from 'react';
import Sidebar from './sidebar';
import Header from './header';
import { LuAlignLeft } from 'react-icons/lu';
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="wrap relative">

      <Sidebar
        classes={isOpen ? 'block' : 'max-sm:hidden max-md:hidden max-lg:hidden'}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className='absolute left-4 top-5 text-2xl hidden max-sm:block max-md:block z-30 max-lg:block'>
        <LuAlignLeft />
      </button>

      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-md:ml-0 max-lg:ml-0 max-sm:p-4 max-md:p-4 max-lg:p-4 p-16 ml-[250px]">
        {children}
      </motion.main>
    </div >
  );
}
