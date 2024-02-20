"use client"
import './css/admin.css'
import { LuAreaChart, LuEye, LuEyeOff, LuHistory, LuMoreVertical, LuPencil, LuTicket, LuTrophy, LuUser } from 'react-icons/lu';
import Image from 'next/image';

import { ReactNode, useState } from 'react';
import { Dropdown } from '../components/Dropdown'
import DashboardLayout from '../components/admin/layout';

interface DashboardProps {
    children: ReactNode
}

export default function Dashboard({ children }: DashboardProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false)
    return (
        <DashboardLayout>
            <h1 className='flex gap-1 items-center text-md'><LuUser className='font-semibold animate-bounce' /> Olá <span className='font-semibold'>rbrasildev</span></h1>
            <a href="/admin/raffles/create" className='bg-slate-100 border shadow-sm p-2 rounded-lg hover:bg-slate-50 hover:text-slate-500 my-6 transition-all flex gap-2 items-center justify-center w-52'><LuTicket className='text-1xl' /> CRIAR CAMPANHAS</a>
            <h1 className='text-xl font-medium text-gray-800 flex gap-2'><LuTicket className='text-2xl' /> Minhas campanhas</h1>
            <h4 className='text-gray-600'>Aqui estão suas campanhas criadas</h4>

            <select className='my-2 border rounded-md p-3 w-1/5 max-sm:w-full max-md:w-full max-lg:w-full px-4 text-sm font-medium text-gray-500 border-slate-200 outline-none hover:bg-slate-100 hover:bg-opacity-5 transition-all' name="status" id="sstatus">
                <option className='m-3' value="">Em andamento</option>
                <option value="">Encerradas</option>
            </select>

            <div className="my-3 relative rounded-3xl overflow-hidden border shadow-sm bg-white">
                <div className='absolute right-4 top-10'>
                    <Dropdown.Root>
                        <Dropdown.Button
                            onBlur={() => setIsVisibleDropdown(false)}
                            onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}
                            icon={LuMoreVertical}
                            iconClass=''
                            className='border outline-none text-black border-slate-200 p-3 flex items-center rounded-lg m-2 bg-slate-50 justify-center w-10 h-10' />
                        {isVisibleDropdown &&
                            <Dropdown.Items>
                                <Dropdown.Item icon={LuEye} text='Visualizar' link='#' />
                                <Dropdown.Item icon={LuPencil} text='Editar' link='#' />
                                <Dropdown.Item icon={LuAreaChart} text='Ranking' link='#' />
                                <Dropdown.Item icon={LuHistory} text='Histórico' link='#' />
                                <Dropdown.Item icon={LuTrophy} text='Informar Vencedor' link='#' />
                            </Dropdown.Items>
                        }
                    </Dropdown.Root>
                </div>

                <div className="h-32 bg-slate-600">
                    <Image
                        src="/assets/banner.png"
                        width={1920}
                        height={1080}
                        alt='Rifas'
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="px-5">
                    <div className="progress flex flex-col w-full">
                        <p className="text-lg my-3">iphone 15 pro max 256 / 10 premios de 300 reais</p>
                        <div className="progress rounded-xl bg-slate-100 overflow-hidden">
                            <div className="bg-[#22C55E] rounded-xl h-2 w-[3.51%]"> </div>
                        </div>
                    </div>

                    <p className='my-3 text-sm flex justify-end'>3,51% de 100.000 bilhetes</p>
                    <div className="badge flex gap-2 flex-wrap my-4">
                        <button onClick={() => setIsVisible(!isVisible)} className="rounded-2xl font-medium text-sm  text-white px-4 badge-info bg-[#3B82F6] flex items-center gap-2">
                            {
                                isVisible
                                    ? <LuEye className='text-lg' />
                                    : <LuEyeOff className='text-lg' />
                            }
                            ARRECADOU
                            {
                                isVisible && " R$ 846,16"

                            }
                        </button>
                        <div className="rounded-2xl font-medium text-sm text-white px-4 badge-success bg-[#22C55E]">PAGOS 3.758</div>
                        <div className="rounded-2xl font-medium text-sm text-white px-4 badge-warning bg-orange-500">RESERVADO 0</div>
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}