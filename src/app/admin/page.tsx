import './css/admin.css'
import { LuEye, LuTicket } from 'react-icons/lu';
import Image from 'next/image';
import Sidebar from '../components/admin/sidebar';
import Header from '../components/admin/header';
import { ReactNode } from 'react';

interface DashboardProps {
    children: ReactNode
}

export default function Dashboard({ children }: DashboardProps) {
    return (
        <div className="wrap">
            <Header />
            <Sidebar />
            <main className="ml-[280px] p-3 h-auto">
                <h1>Olá BRRifas</h1>
                <button className='bg-slate-100 border p-2 rounded-lg hover:bg-lime-500 hover:text-white my-6 transition-all flex gap-2'><LuTicket className='text-2xl' /> CRIAR CAMPANHAS</button>

                <h1 className='text-xl flex gap-2'><LuTicket className='text-2xl' /> Minhas campanhas</h1>
                <h4>Aqui estão suas campanhas criadas</h4>
                <select className='my-2 border rounded-sm p-2 text-lg border-slate-200 outline-none' name="" id="">
                    <option value="">Em andamento</option>
                    <option value="">Encerradas</option>
                </select>

                <div className="my-3 relative rounded-3xl overflow-hidden border shadow-sm bg-white">
                    <button className='absolute right-0 border outline-none text-slate-50 border-slate-200 p-3 flex items-center rounded-lg m-2 bg-slate-300 justify-center w-10 h-10'>...</button>
                    <div className="h-48 bg-slate-600">
                        <Image
                            src="/assets/banner.png"
                            width={1920}
                            height={1080}
                            alt='Rifas'
                            className='w-full h-full object-cover' // Garanta que a imagem ocupe toda a altura da div
                        />
                    </div>
                    <div className="px-5">
                        <div className="progress flex flex-col w-full">
                            <p className="text-lg my-6">iphone 15 pro max 256 / 10 premios de 300 reais</p>
                            <div className="progress rounded-sm bg-slate-100 overflow-hidden">
                                <div className="bg-lime-600 text-sm font-semibold text-slate-50 text-center  w-[63%]">63%</div>
                            </div>
                        </div>

                        <p className='my-6'>3,51% de 100.000 bilhetes</p>
                        <div className="badge flex gap-3 my-6">
                            <div className="rounded-2xl font-semibold text-sm text-white px-5 badge-info bg-blue-700 flex items-center gap-3"><LuEye />ARRECADOU R$ 846,16</div>
                            <div className="rounded-2xl font-semibold text-sm text-white px-10 badge-success bg-green-500">PAGOS</div>
                            <div className="rounded-2xl font-semibold text-sm text-white px-10 badge-warning bg-orange-500">RESERVADO</div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    )
}