'use client'
import DashboardLayout from "@/app/components/admin/layout"
import { useEffect, useState } from "react"

export default function PageVideo({ params: { id } }) {
    const [video, setVideo] = useState([])
    console.log(video)
    useEffect(() => {
        fetch(`https://api-estoque-nodejs.onrender.com/videos/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setVideo(data);
            })
            .then((error) => {
                console.log(error)
            })
    }, [])

    return (
        <DashboardLayout>
            <h1>VIdeos</h1>
        </DashboardLayout>
    )
}