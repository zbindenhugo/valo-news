import { useEffect, useState } from "react"

export default function Agents(){
    

    const [allAgents, setAllAgents] = useState([])

    const [loading, toggleLoading] = useState(false)

    useEffect(() => {

        toggleLoading(true);

        const fetchDatas = async () => {
            const datas = await fetch('https://valorant-api.com/v1/agents?language=fr-FR&isPlayableCharacter=true');
            const jsonData = await datas.json();
            await setAllAgents(jsonData.data);
        }

        fetchDatas();

    })

    return(
        <>
            {
                loading ? 
                    <div>On attends les datas</div>
                :
                    <div>All agents</div>
            }

        </>
        
    )
}