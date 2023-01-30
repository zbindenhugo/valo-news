import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({actualPage, setactualPage}){

    return(
        <nav className="text-center w-full text-white p-5 grid grid-cols-4 sm:text-xl text-sm">
            <Link to='/infos' className={actualPage === 'infos' ? "text-red-600" : ""}>Informations générales</Link>
            <Link to='/agents' className={actualPage === 'agents' ? "text-red-600" : ""}>Les Agents</Link>
            <Link to='/maps' className={actualPage === 'maps' ? "text-red-600" : ""}>Les Cartes</Link>
            <Link to='/weapons' className={actualPage === 'weapons' ? "text-red-600" : " "}>Les Armes</Link>
        </nav>
    )
}