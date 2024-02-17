import './css/admin.css'

export default function Dashboard() {
    return (
        <div className="wrap">
            <header></header>
            <aside className="sidebar w-[200px] bg-amber-400 fixed left-0 top-0 bottom-0">
                <ul>
                    <li><a href="">Capanhas</a></li>
                    <li><a href="">Ranking</a></li>
                    <li><a href="">Configurações</a></li>
                    <li><a href="">Tutoriais</a></li>
                    <li><a href="">Suporte</a></li>
                    <li><a href="">Sair</a></li>
                </ul>
            </aside>

            <main className="content">

            </main>

        </div>
    )
}