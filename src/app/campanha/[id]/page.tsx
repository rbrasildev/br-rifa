import Image from "next/image"
import { LuClover, LuInstagram, LuPhoneCall, LuSearch } from "react-icons/lu"
import { Divider } from 'antd';
import Bilhetes from "../components/FormBilhetes";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


interface CampanhaProps {
    id: number,
    nomeCampanha: string,
    qtdBilhete: number,
    valor: number,
    localSorteio: string,
    telefone: string,
}

export default async function Campanha({ params: { id } }) {

    async function getData(id: number) {
        const response = await fetch(`https://br-rifa-frontend.vercel.app/api/campanha/${id}`);
        return response.json();
    }
    const campanha = await getData(id);

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

                <h1 className="text-gray-700 font-bold text-2xl mt-4">{campanha.nomeCampanha}</h1>
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

                <Bilhetes nomeCampanha={campanha.nomeCampanha} valor={campanha.valor} />

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

