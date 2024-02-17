// import './css/admin.css';
import Image from 'next/image';
import Link from 'next/link';
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

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="wrap">
      <header className="ml-[280px] bg-white flex flex-col justify-end border-b-2 border-zinc-600">
        <Image src="/assets/logo.png" width={200} height={100} alt="BR Rifas" />
      </header>
      <aside className="sidebar w-[280px] fixed text-slate-600 left-0 top-0 bottom-0 border-r-2 bg-slate-50 border-zinc-300 p-3">
        <a href="/admin">
          <Image
            className="my-10"
            src="/assets/logo.png"
            width={330}
            height={110}
            alt="BR Rifas"
          />
        </a>
        <ul className="flex flex-col gap-3">
          <li>
            <a
              href="/admin/campanhas"
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <LuTicket />
              Campanhas
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <MdAutoGraph /> Ranking
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <MdShoppingCart />
              Histórico de colaborações
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <MdSettings />
              Configurações
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <MdMenuBook />
              Tutoriais
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <MdPhoneCallback />
              Suporte
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 items-center hover:text-lime-700 translate-x-2"
            >
              <MdLogout />
              Sair
            </a>
          </li>
        </ul>
      </aside>
      <main className="ml-[280px] p-3">{children}</main>
    </div>
  );
}
