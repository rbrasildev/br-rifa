'use client';
import { useState } from 'react';
import { Dropdown } from '../Dropdown';
import { LuBan, LuMoreVertical, LuPhoneCall } from 'react-icons/lu';

export default function OrdersDropdown() {
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  return (
    <Dropdown.Root>
      <Dropdown.Button
        onBlur={() => setIsVisibleDropdown(false)}
        onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}
        icon={LuMoreVertical}
        iconClass="mb-0"
        className="border outline-none text-black border-slate-200 p-3 flex items-center rounded-lg m-2 bg-slate-50 justify-center w-10 h-10"
      />
      {isVisibleDropdown && (
        <Dropdown.Items>
          <Dropdown.Item icon={LuBan} text="Cancelar reserva" link="#" />
          <Dropdown.Item icon={LuPhoneCall} text="Entrar em contato" link="#" />
        </Dropdown.Items>
      )}
    </Dropdown.Root>
  );
}
