import Image from "next/image"
import { MdShoppingCart, MdAutoGraph, MdSettingsSystemDaydream, MdSettings, MdBook, MdMenuBook, MdPhoneCallback, MdLogout, MdLooks, MdLabel, MdLabelOutline, MdNewLabel, MdStickyNote2, MdAirplaneTicket } from "react-icons/md"
import { LuTicket } from "react-icons/lu";

export default function Sidebar() {
    return (
        <aside className="w-[280px] fixed text-lg text-slate-600 left-0 top-0 bottom-0 border-r-2 bg-slate-50 border-zinc-300 p-3">
            <Image
                className='my-10'
                src="/assets/logo.png"
                width={330}
                height={110}
                alt="BR Rifas"
            />
            <ul className='flex flex-col gap-3'>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><LuTicket />Campanhas</a></li>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><MdAutoGraph /> Ranking</a></li>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><MdShoppingCart />Histórico de colaborações</a></li>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><MdSettings />Configurações</a></li>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><MdMenuBook />Tutoriais</a></li>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><MdPhoneCallback />Suporte</a></li>
                <li><a href="" className='flex gap-2 items-center hover:text-lime-500 translate-x-2'><MdLogout />Sair</a></li>
            </ul>
        </aside>
    )
}