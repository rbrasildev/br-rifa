'use client';
import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
interface AdminCollectButtonProps {
  item: {
    id: number;
    nomeCampanha: string;
    qtdBilhete: number;
    valor: number;
    localSorteio: string;
    telefone: string;
  };
}
export default function AdminCollectButton({ item }: AdminCollectButtonProps) {
  const [isVisible, setIsVisible] = useState([false]);
  return (
    <button
      onClick={() =>
        setIsVisible((prevState) => ({
          ...prevState,
          [item.id]: !prevState[item.id]
        }))
      }
      className="rounded-2xl font-medium text-sm  text-white px-4 badge-info bg-[#3B82F6] flex items-center gap-2"
    >
      {isVisible[item.id] ? (
        <LuEye className="text-lg" />
      ) : (
        <LuEyeOff className="text-lg" />
      )}
      ARRECADOU
      {isVisible[item.id] && ' R$ 846,16'}
    </button>
  );
}
