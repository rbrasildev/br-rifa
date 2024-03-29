'use client';
import Image from 'next/image';
import {
  LuGraduationCap,
  LuHistory,
  LuLogOut,
  LuMessageSquare,
  LuSettings,
  LuTicket,
  LuTrendingUp
} from 'react-icons/lu';
import { usePathname } from 'next/navigation';
interface SidebarProps {
  classes?: string;
}
export default function Sidebar({ classes }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={`${classes} w-auto fixed text-lg text-slate-600 left-0 top-0 bottom-0 border bg-white p-2 z-20 transition-all`}
    >
      <div className="flex justify-center">
        <Image
          className="rounded-full my-5 border-[5px] border-[#1ed488] border-rounded-full"
          src="/assets/avatar.png"
          width={128}
          height={128}
          alt="BR Rifas"
        />
      </div>
      <ul className="flex flex-col text-[14px]">
        <li>
          <a
            href="/admin"
            className={`${pathname === '/admin' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuTicket className="text-2xl" />
            Campanhas
          </a>
        </li>
        <li>
          <a
            href="/admin/ranking"
            className={`${pathname === '/admin/ranking' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuTrendingUp className="text-2xl" /> Ranking
          </a>
        </li>
        <li>
          <a
            href="/admin/orders"
            className={`${pathname === '/admin/orders' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuHistory className="text-2xl" />
            Histórico de colaborações
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${pathname === '/admin/tutorials' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuGraduationCap className="text-2xl" />
            Tutoriais
          </a>
        </li>
        <li>
          <a
            href="/admin/settings"
            className={`${pathname === '/admin/settings' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuSettings className="text-2xl" />
            Configurações
          </a>
        </li>
        <li>
          <a
            href="/admin/support"
            className={`${pathname === '/admin/support' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuMessageSquare className="text-2xl" />
            Suporte
          </a>
        </li>
        <li>
          <a
            href="/admin/logout"
            className={`${pathname === '/admin/logout' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}
          >
            <LuLogOut className="text-2xl" />
            Sair
          </a>
        </li>
      </ul>
    </aside>
  );
}
