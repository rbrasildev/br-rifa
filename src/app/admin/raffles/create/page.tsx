import DashboardLayout from "@/app/components/admin/layout"
import { LuArrowRight, LuInfo, LuTicket } from "react-icons/lu"

export default function Create() {
    return (
        <DashboardLayout>
            <h1 className='text-3xl flex mb-8 gap-2 items-center font-bold'><LuTicket className='text-3xl' />Criar Campanha</h1>
            <form>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Nome da campanha</label>
                    <input className="border shadow-sm rounded-md p-3 px-4 text-sm border-slate-200 outline-none" type="text" placeholder="Nome da campanha" />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="flex gap-2 items-center" htmlFor="">Quantidade de bilhetes <LuInfo /></label>
                    <select className="border shadow-sm rounded-md p-3 px-4 text-sm border-slate-200 outline-none" name="qtd" id="qtd">
                        <option value="">25 bilhetes - (00 à 24)</option>
                        <option value="">50 bilhetes - (00 à 49)</option>
                        <option value="">100 bilhetes - (000 à 99)</option>
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Nome da campanha</label>
                    <div>
                        <span className="border rounded-l-md p-[13.5px] px-4 text-sm border-slate-200 outline-none">R$</span>
                        <input className="border-l-0 border shadow-sm rounded-r-md p-3 px-4 text-sm border-slate-200 outline-none" type="text" placeholder="0,00" />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Por onde será o sorteio</label>
                    <select className="border shadow-sm rounded-md p-3 px-4 text-sm border-slate-200 outline-none" name="qtd" id="qtd">
                        <option value="">25 bilhetes - (00 à 24)</option>
                        <option value="">50 bilhetes - (00 à 49)</option>
                        <option value="">100 bilhetes - (000 à 99)</option>
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Telefone para suporte</label>
                    <input className="border shadow-sm rounded-md p-3 px-4 text-sm border-slate-200 outline-none" type="text" placeholder="Telefone / WhatsApp" />
                </div>
                <div className="flex gap-2 mb-4">
                    <input type="checkbox" name="" id="" /> Ao criar esta campanha, você aceita nossos Termos de Uso e a nossa Política de Privacidade.
                </div>

                <button className="bg-[#22C55E] rounded-md flex gap-2 text-slate-50 items-center p-2 px-4 hover:bg-[#6fec9d] transition-all hover:text-slate-100 shadow-sm" type="submit" value="">Prosseguir <LuArrowRight /></button>

            </form>
        </DashboardLayout>
    )
}