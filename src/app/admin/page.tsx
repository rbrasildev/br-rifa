import './css/admin.css'
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
                {children}
            </main>

        </div>
    )
}