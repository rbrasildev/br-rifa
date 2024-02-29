interface CampanhaProps {
    id: number; // Ensured consistent data type
    nomeCampanha: string;
    qtdBilhete: number;
    valor: number;
    localSorteio: string;
    telefone: string;
}

export default async function getData(id: string): Promise<CampanhaProps> {
    try {
        const response = await fetch(
            `https://br-rifa-frontend.vercel.app/api/campanha/${id}`
        );

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error("Error fetching campaign data:", error);
        // Handle the error appropriately, e.g., display an error message to the user
        throw error; // Re-throw the error to allow for further error handling
    }
}
