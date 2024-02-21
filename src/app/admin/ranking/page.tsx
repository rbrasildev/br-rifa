'use client'
import DashboardLayout from "@/app/components/admin/layout"
import { useEffect, useState } from "react";


interface userProps {
    nome: string,
    endereco: string,
    bairro: string,
    telefone: string,
    created_at: string
}
export default function Ranking() {
    const [user, setUser] = useState<userProps[]>([]);
    useEffect(() => {
        fetch('https://fscode.com.br/api/employer')
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                setUser(response)
            })
            .then((error) => {
                console.log(error)
            })
    }, [])


    return (
        <DashboardLayout>

            <div className="flex gap-2 flex-wrap">
                {user.map(item => {
                    return <div className="flex p-6 border rounded-lg shadow">
                        <ul>
                            <li>{item.nome}</li>
                            <li>{item.endereco}</li>
                            <li>{item.bairro}</li>
                            <li>{item.telefone}</li>
                            <li>{item.created_at}</li>
                        </ul>
                    </div>
                })}

            </div>

        </DashboardLayout >
    )
}