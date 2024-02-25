import DashboardLayout from "@/app/components/admin/layout";
import { LuDelete, LuEye, LuTrash } from "react-icons/lu";

export default async function videos() {
    async function getData() {
        const data = await fetch('https://api-estoque-nodejs.onrender.com/videos')
        return data.json();
    }

    const videos = await getData();

    return (
        <DashboardLayout>
            <div className="grid grid-cols-3 gap-2">
                {videos.map((video) => {
                    return <div key={video.id} className="overflow-hidden cursor-pointer w-62  transition-all">
                        <div className="bg-zinc-800/50 h-36 rounded-md w-auto border"></div>
                        <p className="font-medium text-md">{video.title}</p>
                        <p className="text-sm">{video.description}</p>
                        <p className="text-sm">Duração: {video.duration / 60}</p>
                        <a href={`/admin/videos/${video.id}`} ><LuEye /></a>
                    </div>
                })}
            </div>
        </DashboardLayout >
    )
}