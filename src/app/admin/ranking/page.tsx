import DashboardLayout from "@/app/components/admin/layout"
import { LuChevronUp } from "react-icons/lu"

export default function Ranking() {
    return (
        <DashboardLayout>
            <h1>Raking</h1>
            <div>
                <div className="flex p-6 border rounded-lg shadow">
                    <ul>
                        <li>Nome</li>
                        <li>Endereço</li>
                        <li>CPF</li>
                        <li>Telefone</li>
                        <li>Data</li>
                    </ul>
                </div>
            </div>

        </DashboardLayout >
    )
}