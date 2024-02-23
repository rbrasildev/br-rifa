import './css/admin.css';
import { LuTicket, LuUser } from 'react-icons/lu';
import Image from 'next/image';

import DashboardLayout from '../components/admin/layout';
import AdminDropdown from '../components/admin/adminDropdown';
import AdminCollectButton from '../components/admin/adminCollectButton';

interface DashboardProps {
  id: number;
  nomeCampanha: string;
  qtdBilhete: number;
  valor: number;
  localSorteio: string;
  telefone: string;
}
async function getData() {
  const response = await fetch(
    'https://br-rifa-frontend.vercel.app/api/campanha/'
  );
  return response.json();
}
export default async function Dashboard() {
  const campanha: DashboardProps[] = await getData();

  return (
    <DashboardLayout>
      <h1 className="flex gap-1 items-center text-md">
        <LuUser className="font-semibold animate-bounce" /> Olá{' '}
        <span className="font-semibold">rbrasildev</span>
      </h1>
      <a
        href="/admin/raffles/create"
        className="bg-slate-100 border shadow-sm p-2 rounded-lg hover:bg-slate-50 hover:text-slate-500 my-6 transition-all flex gap-2 items-center justify-center w-52"
      >
        <LuTicket className="text-1xl" /> CRIAR CAMPANHAS
      </a>
      <h1 className="text-xl font-medium text-gray-800 flex gap-2">
        <LuTicket className="text-2xl" /> Minhas campanhas
      </h1>
      <h4 className="text-gray-600">Aqui estão suas campanhas criadas</h4>

      <select
        className="my-2 border rounded-md p-3 w-1/5 max-sm:w-full max-md:w-full max-lg:w-full px-4 text-sm font-medium text-gray-500 border-slate-200 outline-none hover:bg-slate-100 hover:bg-opacity-5 transition-all"
        name="status"
        id="sstatus"
      >
        <option className="m-3" value="">
          Em andamento
        </option>
        <option value="">Encerradas</option>
      </select>
      {campanha.map((item) => {
        return (
          <div
            key={item.id}
            className="my-3 relative rounded-3xl border shadow-sm mb-4 bg-white"
          >
            <div className="absolute right-4 top-10">
              <AdminDropdown item={item} />
            </div>

            <div className="h-32 bg-slate-600 overflow-hidden rounded-t-3xl">
              <Image
                src="/assets/banner.png"
                width={1920}
                height={1080}
                alt="Rifas"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-5">
              <div className="progress flex flex-col w-full">
                <p className="text-lg my-3">{item.nomeCampanha}</p>
                <div className="progress rounded-xl bg-slate-100 overflow-hidden">
                  <div className="bg-[#22C55E] rounded-xl h-2 w-[3.51%]"> </div>
                </div>
              </div>

              <p className="my-3 text-sm flex justify-end">
                3,51% de {item.qtdBilhete} bilhetes
              </p>
              <div className="badge flex gap-2 flex-wrap my-4">
                <AdminCollectButton item={item} />
                <div className="rounded-2xl font-medium text-sm text-white px-4 badge-success bg-[#22C55E]">
                  PAGOS 3.758 A
                </div>
                <div className="rounded-2xl font-medium text-sm text-white px-4 badge-warning bg-orange-500">
                  RESERVADO 0
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </DashboardLayout>
  );
}
