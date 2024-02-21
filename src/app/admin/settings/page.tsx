import Image from 'next/image';
import DashboardLayout from '@/app/components/admin/layout';
import { LuDollarSign, LuPencil, LuUser, LuUserCircle } from 'react-icons/lu';

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="flex gap-5 max-sm:flex-col">
        <ul className="flex flex-col gap-2">
          <li>
            <a className="flex gap-2 items-center whitespace-nowrap" href="">
              <LuUserCircle />
              Minha conta
            </a>
          </li>
          <li>
            <a className="flex gap-2 items-center whitespace-nowrap" href="">
              <LuDollarSign />
              Meios de pagamento
            </a>
          </li>
          <li>
            <a className="flex gap-2 items-center whitespace-nowrap" href="">
              <LuUser />
              Redes sociais
            </a>
          </li>
          <li>
            <a className="flex gap-2 items-center whitespace-nowrap" href="">
              <LuPencil />
              Personalização
            </a>
          </li>
        </ul>
        <div className="shadow rounded-md bg-white border p-4 w-full">
          <h1 className="font-semibold text-lg">Minha conta</h1>

          <div className="flex items-center my-4">
            <Image
              className="rounded-full p-2"
              src="/assets/avatar.png"
              width={64}
              height={64}
              alt="BR Rifas"
            />
            <button className="border border-slate-200 rounded-md h-10 w-20 shadow-sm hover:bg-gray-100  hover:shadow-md transition-all">
              Alterar
            </button>
          </div>
          <form>
            <div className="flex flex-col mb-4">
              <label htmlFor="">Seu nome</label>
              <div className="flex gap-1 mb-4">
                <input
                  className="border w-1/2 focus:border-lime-500 shadow-sm rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                  type="text"
                  placeholder="Nome"
                />
                <input
                  className="border w-1/2 focus:border-lime-500 shadow-sm rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                  type="text"
                  placeholder="Sobrenome"
                />
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="">Email</label>
                <input
                  className="border shadow-sm focus:border-lime-500 rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                  type="text"
                  placeholder="Digite seu email"
                />
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="">Celular</label>
                <input
                  className="border shadow-sm focus:border-lime-500 rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                  type="text"
                  placeholder="Celular"
                />
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <label htmlFor="">Nome de exibição</label>
                <input
                  className="border shadow-sm focus:border-lime-500 rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                  type="text"
                  placeholder="Nome de exibição"
                />
              </div>
              <div className="flex flex-col gap-1">
                <button className="border border-gray-200 rounded-md h-10 w-20 shadow-sm bg-gray-800 text-slate-50 hover:bg-gray-700  hover:shadow-md transition-all">
                  Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
