'use client'
import Image from "next/image"

import React, { useEffect, useState } from "react"

import { LuAnchor, LuClover, LuInstagram, LuMail, LuPhone, LuPhoneCall, LuSearch } from "react-icons/lu"
import { Button, Modal, Space, Input, Divider } from 'antd';
import getData from "../api";


interface CampanhaProps {
    id: number,
    nomeCampanha: string,
    qtdBilhete: number,
    valor: number,
    localSorteio: string,
    telefone: string,
}

export default function Campanha({ params: { id } }: { params: { id: string } }) {
    const [campanha, setCampanha] = useState<CampanhaProps>({
        id: 0,
        nomeCampanha: '',
        qtdBilhete: 0,
        valor: 0,
        localSorteio: '',
        telefone: ''
    })
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [qtdBilhetes, setQtdBilhetes] = useState(1);
    const [formData, setFormData] = useState({
        qtd: '',
        nome: '',
        email: '',
        telefone: '',
        telefoneRepetido: '',
    });

    useEffect(() => {
        setCampanha(await getData(id))
    }, [])

    const handleChange = (e: any) => {
        e.preventDefault()

        setFormData({
            ...formData,
            ['qtd']: qtdBilhetes.toString(),
        });
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getFormData = () => {
        return formData;
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        let newData = getFormData()

        newData.qtd = qtdBilhetes.toString();
        const data = newData;
        console.log(data)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const handleIncremnt = () => {
        setQtdBilhetes(qtdBilhetes + 1)
    }
    const handleDecrement = () => {
        setQtdBilhetes(qtdBilhetes - 1)
    }
    const handleSpecificValue = (specificValue: number) => {
        setQtdBilhetes(qtdBilhetes + specificValue)
    }


    return (

        <div className="text-gray-600">
            <header className="border p-3">
                <div className="w-full container mx-auto flex justify-between">
                    <Image
                        src='/assets/logo.png'
                        width={128}
                        height={0}
                        alt="Logo"
                        className="w-[128px] h-auto"
                    />
                    <button className="flex items-center p-2 border rounded-3xl  px-4 gap-2 text-gray-700 hover:bg-gray-200/50 transiton-all"><LuSearch />Meus bilhetes</button>

                </div>
            </header>

            <div className="my-5 grid place-content-center max-sm:p-3 max-md:p-3 max-lg:p-3">
                <div className="relative">
                    <Image
                        className="rounded-3xl relative"
                        src='/assets/banner.png'
                        width={1000}
                        height={720}
                        alt="Banner"
                    />
                    <div className="absolute bottom-0 left-0 m-10 max-md:m-4 rounded-md text-sm bg-slate-50 p-3">Participe por apenas: <span className="font-bold">R$ {campanha.valor}</span>🔥</div>
                </div>

                <h1 className="text-gray-700 font-bold text-2xl my-4">{campanha.nomeCampanha}</h1>
                <Divider />

                <div className="flex gap-2 pb-3 items-center">
                    <Image
                        src='/assets/avatar.png'
                        width={70}
                        height={70}
                        alt="Logo"
                        className="w-[70px] h-[70px] rounded-full"
                    />

                    <div>
                        <p className="text-sm">Organizado por:</p>
                        <p className="font-semibold">Hugo Lacerda</p>
                        <div className="flex gap-1">
                            <button className="px-4 p-1 bg-[#01A884] text-white rounded-3xl  text-sm flex gap-2 items-center"><LuPhoneCall /> Suporte</button>
                            <button className="px-4 p-1   bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-3xl text-sm flex gap-2 items-center"><LuInstagram />Instagram</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#FB923C] p-4 rounded-2xl border border-red-600 mb-6">
                    <div className="flex gap-6 items-center my-4">
                        <Image
                            src="/assets/medal.png"
                            width={48}
                            height={48}
                            alt="medal"
                        />
                        <span className="rounded-3xl p-1 px-4 bg-[#F97316] text-sm font-semibold text-white">Prêmios</span>
                    </div>
                    <div className=" text-white">
                        <p>1º lugar - <span className="font-semibold">IPHONE 15 PRO MAX 256GB</span></p>
                        <p>2º lugar - <span className="font-semibold">10 bilhetes de 300 Reais</span></p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border mb-6 shadow-sm">
                    <p className="text-center my-3">Descrição / Regulamento</p>
                    <div className="text-center">
                        <p>1º lugar - <span className="font-semibold">IPHONE 15 PRO MAX 256GB</span></p>
                        <p>2º lugar - <span className="font-semibold">10 bilhetes de 300 Reais</span></p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border mb-6 shadow-sm">
                    <p className="my-6 font-semibold translate-x-[-25px] text-center">Ranking</p>
                    <div className="flex justify-around text-sm mb-6">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl">🥇</span>
                            <p>Amanda Ferreira Lima</p>
                            <p><span className="font-semibold">609</span> bilhetes</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-3xl">🥈</span>
                            <p>Alex Garcia Cardoso</p>
                            <p><span className="font-semibold">401</span> bilhetes</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl">🥉</span>
                            <p>Tarcísio Ericke Coimbra Lima</p>
                            <p><span className="font-semibold">301</span> bilhetes</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border mb-6 shadow-sm">
                    <p className="my-6 font-semibold translate-x-[-25px] text-center">SELECIONE A QUANTIDADE DE BILHETES</p>
                    <div className="text-sm mb-6 flex justify-center">
                        <div className="flex flex-col  gap-2 w-[70%]">
                            <div className="flex max-sm:gap-1 gap-2 justify-between">
                                <button
                                    onClick={() => handleSpecificValue(1)}
                                    className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                                >+1</button>
                                <button
                                    onClick={() => handleSpecificValue(5)}
                                    className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                                >+5</button>
                                <button
                                    onClick={() => handleSpecificValue(10)}
                                    className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                                >+10</button>
                                <button
                                    onClick={() => handleSpecificValue(100)}
                                    className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                                >+100</button>

                            </div>
                            <div className="flex justify-between gap-1">
                                <button
                                    onClick={handleDecrement}
                                    className="p-2 shadow-sm rounded-full border transition-all hover:bg-slate-100/50"
                                >-</button>
                                <Input
                                    className="text-center"
                                    value={qtdBilhetes}
                                    onChange={(e) => setQtdBilhetes(e.target.value)}
                                />

                                <button
                                    onClick={handleIncremnt}
                                    className="p-2  shadow-sm rounded-full border transition-all hover:bg-slate-100/50"
                                >+</button>
                            </div>
                            <div className="flex justify-between">
                                <span>Valor final</span>
                                <span>R$ 0,24</span>
                            </div>
                            <Button onClick={showModal} className="bg-[#4ADE80]" type="primary">RESERVAR</Button>
                            <Modal

                                title="Reservar bilhetes"
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                okText="RESERVAR"
                                okButtonProps={{
                                    style: {
                                        backgroundColor: '#4ADE80',
                                    },
                                }}
                            >

                                <form onChange={handleChange}>
                                    <Space className="flex gap-3 mt-3" direction="vertical" style={{ width: '100%' }}>
                                        <Input
                                            name="nome"
                                            addonBefore={<LuAnchor />}
                                            placeholder="Nome complento"
                                            allowClear
                                        />
                                        <Input
                                            name="email"
                                            addonBefore={<LuMail />}
                                            placeholder="Digite seu email"
                                            allowClear
                                        />
                                        <Input
                                            name="telefone"
                                            addonBefore={<LuPhone />}
                                            placeholder="Telefone / WhatsApp"
                                            allowClear
                                        />
                                        <Input
                                            name="telefoneRepetido"
                                            addonBefore={<LuPhone />}
                                            placeholder="Repita o telefone"
                                            allowClear
                                        />
                                    </Space>
                                    <div className="flex gap-4 items-start mt-3">
                                        <div className="py-1">
                                            <input type="checkbox" name="therms" id="therms" />
                                        </div>
                                        <span>Li e concordo com os Termos e Condições e estou ciente de que essa reserva me vincula apenas à esta campanha criada pelo(a) organizador(a) e NÃO à plataforma.</span>
                                    </div>
                                    <input type="submit" value="SUbmit" />
                                </form>
                            </Modal>
                        </div>
                    </div >
                </div >

                <div className="grid grid-cols-2 gap-2">
                    <div className="p-4 border shadow-sm bg-white rounded-lg">
                        <p className="font-bold">MEIO DE PAGAMENTO</p>
                        <p><span></span>PIX</p>
                    </div>
                    <div className="p-4 border shadow-sm bg-white rounded-lg">
                        <p className="font-bold">SORTEIO</p>
                        <p className="flex items-center"><LuClover className="text-[#00D26A]" />Loteria federal</p>
                    </div>
                </div>
            </div >

        </div >
    )
}

