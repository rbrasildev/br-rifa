import DashboardLayout from '@/app/components/admin/layout';
import {
  LuCalendar,
  LuCircleDollarSign,
  LuEyeOff,
  LuFilter,
  LuTicket
} from 'react-icons/lu';
import OrdersDropdown from '@/app/components/orders/ordersDropdown';
import { Select } from 'antd';


interface CampanhaProps {
  id: number;
  nome: string,
  qtd: number,
  nomeCampanha: string;
  qtdBilhete: number;
  valor: number;
  localSorteio: string;
  telefone: string;
  value: number;
}


export default async function Orders() {

  async function getData(): Promise<CampanhaProps[]> {
    const response = await fetch(
      'https://br-rifa-frontend.vercel.app/api/campanha'
    );
    return response.json();
  }

  const campanha = await getData();


  async function getCampanha(): Promise<CampanhaProps[]> {
    try {
      const response = await fetch('https://api-reaffle.vercel.app/compra');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados da API');
      }
      const data: CampanhaProps[] = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
      return [];
    }
  }

  const data = await getCampanha();


  function generateNumber(value: number): number[] {
    const numbers: number[] = [];
    for (let i = 0; i <= value; i++) {
      numbers.push(Math.floor(Math.random() * value));
    }
    return numbers;
  }


  return (
    <DashboardLayout>
      <h1 className="font-medium text-2xl text-gray-700">
        Histórico de colaborações
      </h1>
      <div className="card border rounded-t-lg px-8 py-4 mt-5 shadow-sm bg-white">
        <div className="flex flex-col mb-4">
          <label htmlFor="">Selecione uma campanha</label>
          <div className="flex max-sm:flex-col gap-2 my-2 relative">
            <Select
              defaultValue="Selecione uma campanha"
              className='w-full h-10'
              options={campanha.map((item) => ({
                value: item.id,
                label: item.nomeCampanha
              }))}
            />

            <div className="flex gap-1">
              <button className="flex gap-1 items-center p-2 text-sm px-4 border shadow-sm rounded-md border-gray-300/90 hover:bg-slate-100/50  text-gray-600">
                <LuEyeOff />
                Dados
              </button>
              <button className="flex gap-1 items-center p-2 text-sm px-4 border shadow-sm rounded-md border-gray-300/90 hover:bg-slate-100/50  text-gray-600">
                <LuFilter />
                Filtro
              </button>
            </div>
          </div>
        </div>
      </div>
      {data.map((item) => {
        return <div key={item.id} className="border border-t-0 rounded-b-lg overflow-hidden bg-white">
          <div className="px-8 py-4 border border-x-0 border-y-0">
            <div className="flex relative border-t-1 justify-between w-full">
              <div className="flex gap-2 my-4">
                <h1 className="text-[#22C55E] font-medium text-md">
                  {item.nome}
                </h1>
                <span className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E]/25 border-opacity-10 rounded-md p-1 bg-[#22C55E]/2">
                  Pago
                </span>
              </div>
              <div className="absolute right-0">
                <OrdersDropdown />
              </div>
            </div>
            <ul className="flex gap-4 text-gray-400 border-b-1">
              <li className="flex items-center max-sm:text-[13px] gap-1">
                <LuCircleDollarSign />
                Valor R$ 1,44
              </li>
              <li className="flex items-center max-sm:text-[13px]  gap-1">
                <LuTicket />{item.qtd} bilhetes
              </li>
              <li className="flex items-center max-sm:text-[13px]  gap-1">
                <LuCalendar />
                Criada em 19/02/2024, 07:14
              </li>
            </ul>
            <div className="border border-b-0 border-t-gray-200 border-x-0 my-4"></div>
            <ul className="flex gap-2 mt-2 flex-wrap overflow-scroll overflow-x-hidden max-h-32 ">
              {generateNumber(item.qtd).map((item) => {
                return (
                  <li
                    key={item}
                    className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E]/25 border-opacity-10 rounded-md p-1 bg-[#22C55E]/2"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      })}
    </DashboardLayout>
  );
}
