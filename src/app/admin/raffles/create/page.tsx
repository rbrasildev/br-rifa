'use client'
import DashboardLayout from '@/app/components/admin/layout';
import { useState } from 'react';
import { LuArrowRight, LuInfo, LuTicket } from 'react-icons/lu';
interface CampanhaProps {
    id?: number;
    nomeCampanha: string;
    qtdBilhete: string;
    valor: string;
    localSorteio: string;
    telefone: string;
}
export default function Create() {
    const [form, setForm] = useState<CampanhaProps>({
        nomeCampanha: '',
        qtdBilhete: '',
        valor: '',
        localSorteio: '',
        telefone: ''
    });

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const rawFormData = {
            nomeCampanha: formData.get('nomeCampanha'),
            qtdBilhete: formData.get('qtdBilhete'),
            valor: formData.get('valor'),
            localSorteio: formData.get('localSorteio'),
            telefone: formData.get('telefone'),
        };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rawFormData),
        };

        const url = '/api/campanha';
        const response = await fetch(url, requestOptions);
        if (response.ok) {
            console.log(response);
        } else {
            alert("Erro ao salvar");
        }
        setForm({
            nomeCampanha: '',
            qtdBilhete: '',
            valor: '',
            localSorteio: '',
            telefone: ''
        })
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl flex mb-8 gap-2 items-center font-bold">
                <LuTicket className="text-3xl" />
                Criar Campanha
            </h1>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Nome da campanha</label>
                    <input
                        className="border shadow-sm rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                        type="text"
                        placeholder="Nome da campanha"
                        name='nomeCampanha'
                        value={form.nomeCampanha}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="flex gap-2 items-center" htmlFor="">
                        Quantidade de bilhetes <LuInfo />
                    </label>
                    <select
                        className="border shadow-sm rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                        name="qtdBilhete"
                        id="qtdBilhete"
                        value={form.qtdBilhete}
                        onChange={handleInputChange}
                    >
                        <option defaultValue="">
                            Selecione uma opção
                        </option>
                        <option value="25">25 bilhetes - (00 à 24)</option>
                        <option value="50">50 bilhetes - (00 à 49)</option>
                        <option value="100">100 bilhetes - (000 à 99)</option>
                        <option value="200">100 bilhetes - (000 à 199)</option>
                        <option value="200">500 bilhetes - (000 à 499)</option>
                        <option value="200">1000 bilhetes - (0000 à 999)</option>
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Valor do bilhete</label>
                    <div>
                        <span className="border rounded-l-md p-[9.5px] px-3 text-sm border-slate-200 outline-none">
                            R$
                        </span>
                        <input
                            className="border-l-0 border shadow-sm rounded-r-md p-2 px-4 text-sm border-slate-200 outline-none"
                            type="text"
                            name='valor'
                            id='valor'
                            placeholder="0,00"
                            value={form.valor}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Por onde será o sorteio</label>
                    <select
                        className="border shadow-sm rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                        name="localSorteio"
                        id="localSorteio"
                        value={form.localSorteio}
                        onChange={handleInputChange}
                    >
                        <option defaultValue="">
                            Selecione uma opção
                        </option>
                        <option value="Loteria Federal">Loteria Federal</option>
                        <option value="Sorteador.com.br">Sorteador.com.br</option>
                        <option value="Live no Instagram">Live no Instagram</option>
                        <option value="Live no Youtube">Live no Youtube</option>
                        <option value="Live no TikTok">Live no TikTok</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="">Telefone para suporte</label>
                    <input
                        className="border shadow-sm rounded-md p-2 px-4 text-sm border-slate-200 outline-none"
                        type="text"
                        name='telefone'
                        id='telefone'
                        placeholder="Telefone / WhatsApp"
                        value={form.telefone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex gap-2 mb-4">
                    <input type="checkbox" name="" id="" /> Ao criar esta campanha, você
                    aceita nossos Termos de Uso e a nossa Política de Privacidade.
                </div>

                <button
                    className="bg-[#22C55E] rounded-md flex gap-2 text-slate-50 items-center p-2 px-4 hover:bg-[#6fec9d] transition-all hover:text-slate-100 shadow-sm"
                    type="submit"
                    value=""
                >
                    Salvar <LuArrowRight />
                </button>
            </form>
        </DashboardLayout>
    );
}
