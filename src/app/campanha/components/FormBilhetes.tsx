
import { useState } from "react"
export default function FormBilhetes() {
    const [valor, setValor] = useState(0);

    const handleIncrementar = () => {
        setValor(valor + 1);
    };

    const handleDecrementar = () => {
        setValor(valor - 1);
    };

    return (
        <div className="bg-white p-4 rounded-2xl border mb-6 shadow-sm">
            <p className="my-6 font-semibold translate-x-[-25px] text-center">SELECIONE A QUANTIDADE DE BILHETES</p>
            <div className="text-sm mb-6 flex justify-center">
                <div className="flex flex-col  gap-2 w-[70%]">
                    <div className="flex max-sm:gap-1 gap-2 justify-between">
                        <button
                            className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                        >+1</button>
                        <button
                            className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                        >+5</button>
                        <button
                            className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                        >+10</button>
                        <button
                            className="p-2 max-sm:px-5 max-md:px-8 max-lg:px-12 px-16 shadow-sm rounded-md border transition-all hover:bg-slate-100/50"
                        >+100</button>

                    </div>
                    <div className="flex justify-between gap-1">
                        <button
                            onClick={handleDecrementar}
                            className="p-2 shadow-sm rounded-full border transition-all hover:bg-slate-100/50"
                        >-</button>
                        <input type="number" value={valor} className="shadow-sm w-full text-center rounded-md border p-2 outline-none transition-all hover:bg-slate-100/50" />
                        <button
                            onClick={handleIncrementar}
                            className="p-2  shadow-sm rounded-full border transition-all hover:bg-slate-100/50"
                        >+</button>
                    </div>
                    <div className="flex justify-between">
                        <span>Valor final</span>
                        <span>R$ 0,24</span>
                    </div>
                    <button className="p-2 shadow-sm rounded-md font-semibold text-white transition-all bg-[#4ADE80] hover:bg-[#4ADE80]/50">RESERVAR</button>
                </div>
            </div>
        </div>
    )
}