import { useParams } from "react-router-dom"

export default function Map(){
    
    const {id} = useParams();
    
    return(
        <div>Map n°{id}</div>
    )
}