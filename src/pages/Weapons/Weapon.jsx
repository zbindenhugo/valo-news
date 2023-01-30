import { useParams } from "react-router-dom"

export default function Weapon(){

    const { id } = useParams();

    return(
        <div>Weapon {id}</div>
    )
}