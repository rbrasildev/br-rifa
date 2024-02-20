'use client'
import DashboardLayout from "@/app/components/admin/layout"
import { Dropdown } from '../../components/Dropdown'
import { LuBan, LuCalendar, LuCircleDollarSign, LuEyeOff, LuFilter, LuMoreVertical, LuPhoneCall, LuTicket } from "react-icons/lu"
import { useState } from "react"

export default function Orders() {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false)
    return (
        <DashboardLayout>
            <h1 className="font-semibold text-2xl">Histórico de colaborações</h1>
            <div className="card border rounded-t-lg p-6 mt-5 shadow-sm bg-white">
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Selecione uma campanha</label>
                    <div className="flex gap-2 my-2">
                        <select className="border shadow-sm rounded-md p-3 px-4 text-sm border-slate-200 outline-none w-full" name="qtd" id="qtd">
                            <option value="" selected>Escolha uma opção</option>
                            <option value="">iphone 15 pro max 256 / 10 premios de 300 reais</option>
                        </select>
                        <div className="flex gap-2">
                            <button className="flex gap-1 items-center p-3 border shadow-sm rounded-md hover:bg-slate-100 text-gray-600"><LuEyeOff />Dados</button>
                            <button className="flex gap-1 items-center p-3 border shadow-sm rounded-md hover:bg-slate-100 text-gray-600"><LuFilter />Filtro</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-t-0 rounded-b-lg overflow-hidden bg-white">
                <div className="p-4 border border-x-0 border-y-0">
                    <div className="flex relative border-t-1 justify-between w-full">
                        <div className="flex gap-2 my-4">
                            <h1 className="text-[#22C55E] font-medium text-md">RAIMUNDO NAZARÉ DE OLIVEIRA</h1>
                            <span className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">Pago</span>
                        </div>
                        <div className="absolute right-0">
                            <Dropdown.Root>
                                <Dropdown.Button
                                    onBlur={() => setIsVisibleDropdown(false)}
                                    onClick={() => setIsVisibleDropdown(!isVisibleDropdown)}
                                    icon={LuMoreVertical}
                                    iconClass='mb-0'
                                    className='border outline-none text-black border-slate-200 p-3 flex items-center rounded-lg m-2 bg-slate-50 justify-center w-10 h-10' />
                                {isVisibleDropdown &&
                                    <Dropdown.Items>
                                        <Dropdown.Item icon={LuBan} text='Cancelar reserva' link='#' />
                                        <Dropdown.Item icon={LuPhoneCall} text='Entrar em contato' link='#' />
                                    </Dropdown.Items>
                                }
                            </Dropdown.Root>
                        </div>
                    </div>
                    <ul className="flex gap-4 text-gray-400 border-b-1">
                        <li className="flex items-center max-sm:text-[14px] gap-1"><LuCircleDollarSign />Valor R$ 1,44</li>
                        <li className="flex items-center max-sm:text-[14px]  gap-1"><LuTicket />6 bilhetes</li>
                        <li className="flex items-center max-sm:text-[14px]  gap-1"><LuCalendar />Criada em 19/02/2024, 07:14
                        </li>
                    </ul>
                    <div className="border border-b-0 border-t-gray-200 border-x-0 my-4"></div>
                    <ul className="flex gap-2 mt-2 flex-wrap overflow-scroll overflow-x-hidden max-h-32 ">
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                        <li className="flex items-center text-sm text-[#22C55E] border h-[25px] border-[#22C55E] border-opacity-10 rounded-md p-1 bg-[rgba(22,163,74,.1)]">02054</li>
                    </ul>
                </div>

            </div>
        </DashboardLayout>
    )
}