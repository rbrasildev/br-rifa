'use client'
import { Input, Space } from "antd";
import Modal from "antd/es/modal/Modal";
import { Button } from "antd/es/radio";
import { useState } from "react";
import { LuAnchor, LuMail, LuPhone } from "react-icons/lu";


interface CampanhaProps {
    id: number,
    nomeCampanha: string,
    qtdBilhete: number,
    valor: number,
    localSorteio: string,
    telefone: string,
    price: number,
    sum: number;
    agree: string,
    qtd: number
    email: string,
    nome: string,
}


export default function Bilhetes({ valor }: CampanhaProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [qtdBilhetes, setQtdBilhetes] = useState(1);


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);

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

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const rawFormData = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            telefoneRepetido: formData.get('telefoneRepetido'),
            qtd: qtdBilhetes,
            agree: formData.get('agree')
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rawFormData)
        };

        const url = 'https://api-reaffle.vercel.app/compra';

        const response = await fetch(url, requestOptions);

        if (response.ok) {
            console.log(response);
        } else {
            alert('Erro ao salvar');
        }
    }

    return (
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
                            type="number"
                            className="text-center"
                            value={qtdBilhetes}
                            onChange={(e) => {
                                setQtdBilhetes(parseInt(e.target.value))
                            }}
                        />

                        <button
                            onClick={handleIncremnt}
                            className="p-2  shadow-sm rounded-full border transition-all hover:bg-slate-100/50"
                        >+</button>
                    </div>
                    <div className="flex justify-between">
                        <span>Valor final</span>
                        <span>R${qtdBilhetes * valor}</span>
                    </div>

                    <div>
                        <Button
                            className="w-full text-center bg-[#00D26A] border-0 hover:text-[#fff]"
                            onClick={showModal}

                        >RESERVAR</Button>

                    </div>
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
                        <form onSubmit={handleFormSubmit}>
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
                            <input type="submit" value='ENviar' />
                            <div className="flex gap-4 items-start mt-3">
                                <div className="py-1">
                                    <input type="checkbox" name="agree" id="agree" />
                                </div>
                                <span>Li e concordo com os Termos e Condições e estou ciente de que essa reserva me vincula apenas à esta campanha criada pelo(a) organizador(a) e NÃO à plataforma.</span>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div >
        </div >
    )
}