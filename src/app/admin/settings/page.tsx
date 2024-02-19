import DashboardLayout from "@/app/components/admin/layout";
import { LuDollarSign, LuPencil, LuUser, LuUserCircle } from "react-icons/lu";

export default function Settings() {
    return (
        <DashboardLayout>
            <div className="flex gap-5">
                <ul className="flex flex-col gap-2">
                    <li><a className="flex gap-2 items-center whitespace-nowrap" href=""><LuUserCircle />Minha conta</a></li>
                    <li><a className="flex gap-2 items-center whitespace-nowrap" href=""><LuDollarSign />Meios de pagamento</a></li>
                    <li><a className="flex gap-2 items-center whitespace-nowrap" href=""><LuUser />Redes sociais</a></li>
                    <li><a className="flex gap-2 items-center whitespace-nowrap" href=""><LuPencil />Personalização</a></li>
                </ul>
                <div className="shadow-sm rounded-md border p-4 w-full">
                    <h1 className="font-semibold text-lg">Minha conta</h1>
                </div>
            </div>
        </DashboardLayout>
    )
}