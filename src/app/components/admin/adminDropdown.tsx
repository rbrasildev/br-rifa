'use client';
import { useState } from 'react';
import { Dropdown } from '../Dropdown';
import {
  LuAreaChart,
  LuEye,
  LuHistory,
  LuMoreVertical,
  LuPencil,
  LuTrophy
} from 'react-icons/lu';

interface AdminDropdown {
  item: {
    id: number;
    nomeCampanha: string;
    qtdBilhete: number;
    valor: number;
    localSorteio: string;
    telefone: string;
  };
}
export default function AdminDropdown({ item }: AdminDropdown) {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState([false]);

  return (
    <Dropdown.Root>
      <Dropdown.Button
        onBlur={() =>
          setIsVisibleDropdown((prevState) => ({
            ...prevState,
            [item.id]: false
          }))
        }
        onClick={() =>
          setIsVisibleDropdown((prevState) => ({
            ...prevState,
            [item.id]: !prevState[item.id]
          }))
        }
        icon={LuMoreVertical}
        iconClass=""
        className="border outline-none text-black border-slate-200 p-3 flex items-center rounded-lg m-2 bg-slate-50 justify-center w-10 h-10"
      />
      {isVisibleDropdown[item.id] && (
        <Dropdown.Items>
          <Dropdown.Item icon={LuEye} text="Visualizar" link="#" />
          <Dropdown.Item icon={LuPencil} text="Editar" link="#" />
          <Dropdown.Item icon={LuAreaChart} text="Ranking" link="#" />
          <Dropdown.Item icon={LuHistory} text="Histórico" link="#" />
          <Dropdown.Item icon={LuTrophy} text="Informar Vencedor" link="#" />
        </Dropdown.Items>
      )}
    </Dropdown.Root>
  );
}
