'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

import Sidebar from './sidebar';
import Header from './header';
import { LuAlignLeft } from 'react-icons/lu';
interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Definir a largura da janela ao montar o componente
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    // Lembre-se de remover o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className="wrap relative">

      <Sidebar
        classes={isOpen ? 'block' : 'max-sm:hidden max-md:hidden max-lg:hidden'}
      />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute left-4 top-5 text-2xl hidden max-sm:block max-md:block z-30 max-lg:block"
      >
        <LuAlignLeft />
      </button>
      <AnimatePresence>
        {isOpen && windowWidth < 1024 && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
          >
            <Sidebar />
          </motion.aside>
        )}
        {windowWidth >= 1024 && <Sidebar />}
      </AnimatePresence>

      <Header />
      <main className="max-md:ml-0 max-lg:ml-0 max-sm:p-4 max-md:p-4 max-lg:p-4 p-16 ml-[250px]">
        {children}
      </main>
    </div>
  );
}
