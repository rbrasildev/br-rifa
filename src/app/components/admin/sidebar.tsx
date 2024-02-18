"use client"
import Image from "next/image"
import { MdShoppingCart, MdAutoGraph, MdSettings, MdBook, MdMenuBook, MdPhoneCallback, MdLogout} from "react-icons/md"
import { LuTicket } from "react-icons/lu";
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <aside className="w-[280px] fixed text-lg text-slate-600 left-0 top-0 bottom-0 border bg-slate-50 border-zinc-300 p-2">
            <div className="flex justify-center">
                <Image
                    className='my-10'
                    src="/assets/logo.png"
                    width={100}
                    height={64}
                    alt="BR Rifas"
                />
            </div>
            <ul className='flex flex-col text-[14px]'>
                <li><a href="/admin" className={`${pathname === '/admin' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><LuTicket className="text-2xl" />Campanhas</a></li>
                <li><a href="/admin/ranking" className={`${pathname === '/admin/ranking' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><MdAutoGraph className="text-2xl" /> Ranking</a></li>
                <li><a href="/admin/history" className={`${pathname === '/admin/history' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><MdShoppingCart className="text-2xl" />Histórico de colaborações</a></li>
                <li><a href="/admin/settings" className={`${pathname === '/admin/settings' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><MdMenuBook className="text-2xl" />Tutoriais</a></li>
                <li><a href="/admin/tutorials" className={`${pathname === '/admin/tutorials' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><MdSettings className="text-2xl" />Configurações</a></li>
                <li><a href="/admin/support" className={`${pathname === '/admin/support' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><MdPhoneCallback className="text-2xl" />Suporte</a></li>
                <li><a href="/admin/logout" className={`${pathname === '/admin/logout' ? 'bg-[#1ed488] bg-opacity-10 text-[#1ed488]' : 'hover:bg-slate-100 transition-all'} flex gap-2 items-center rounded-md p-2`}><MdLogout className="text-2xl" />Sair</a></li>
            </ul>
        </aside>
    )
}