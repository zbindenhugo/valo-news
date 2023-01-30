import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation({actualPage, setactualPage}){

    return(
        <nav className="text-center w-full text-white p-5 grid grid-cols-4 sm:text-xl text-sm bg-slate-800 shadow-lg">
            <Link to='/infos' className={actualPage === 'infos' ? "text-red-600 transition-all duration-150 hover:text-red-400" : "transition-all duration-150 hover:text-red-400"} onClick={() => setactualPage('infos')}>Informations générales</Link>
            <Link to='/infos/agents' className={actualPage === 'agents' ? "text-red-600 transition-all duration-150 hover:text-red-400" : "transition-all duration-150 hover:text-red-400"} onClick={() => setactualPage('agents')}>Les Agents</Link>
            <Link to='/infos/maps' className={actualPage === 'maps' ? "text-red-600 transition-all duration-150 hover:text-red-400" : "transition-all duration-150 hover:text-red-400"} onClick={() => setactualPage('maps')}>Les Cartes</Link>
            <Link to='/infos/weapons' className={actualPage === 'weapons' ? "text-red-600 transition-all duration-150 hover:text-red-400" : "transition-all duration-150 hover:text-red-400 "} onClick={() => setactualPage('weapons')}>Les Armes</Link>
        </nav>
    )
}