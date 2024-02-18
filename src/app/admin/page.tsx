import './css/admin.css'
import { LuTicket } from 'react-icons/lu';
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
            <main className="ml-[280px] p-3">
                <h1>Olá BRRifas</h1>
                <button className='bg-slate-100 border-2 p-2 rounded-lg hover:bg-lime-500 hover:text-white my-6 transition-all flex gap-2'><LuTicket className='text-2xl' /> CRIAR CAMPANHAS</button>

                <h1 className='text-xl flex gap-2'><LuTicket className='text-2xl' /> Minhas campanhas</h1>
                <h4>Aqui estão suas campanhas criadas</h4>
                <select className='my-2 border-2 rounded-sm p-2 text-lg border-slate-200 outline-none' name="" id="">
                    <option value="">Em andamento</option>
                    <option value="">Encerradas</option>
                </select>
                <div className="my-3 rounded-3xl overflow-hidden w-full h-500 shadow-sm p-5 bg-white">
                    <Image
                        src="/assets/logo.png"
                        width={720}
                        height={200}
                        alt='Rifas'
                    />
                    <div className="progress">
                        <h1 className="text-lg">iphone 15 pro max 256 / 10 premios de 300 reais</h1>
                        <input type="progress" width={50} value={100} />

                    </div>

                </div>
            </main>

        </div>
    )
}