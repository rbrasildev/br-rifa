'use client'
import DashboardLayout from "@/app/components/admin/layout"


export default async function PageVideo({ params: { id } }) {
    async function getData() {
        const data = await fetch(`https://api-estoque-nodejs.onrender.com/videos/${id}`)
        return data.json();
    }

    const videos = await getData();
    console.log(videos)
    return (
        <DashboardLayout>
            <h1>{videos[0].title}</h1>
            <p>{videos[0].description}</p>
        </DashboardLayout>
    )
}