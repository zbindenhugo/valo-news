import './Home.css'
import {Link} from 'react-router-dom' 

export default function Home({setactualPage}){
    return(
        <div className="w-[100vw] h-[100vh] bg-gray-900">
            <div className='fixed top-1/3 -translate-y-1/3 text-white sm:ml-40 w-full'>
                <h1 className='text-6xl'>Bienvenue sur Valo'Infos</h1>
                <p className='italic text-slate-400 text'>Toutes les infos de Valorant. Champions, maps, armes, apprennez tout de ce jeu !</p>
            </div>
            <div className='fixed top-2/3 -translate-y-2/3 text-white text-center w-full animate-bounce'>               
                <Link
                    to="/infos"
                    className='p-5 transition-all duration-150 hover:ring-2 hover:tracking-widest ring-red-500 rounded-xl text-3xl'
                    onClick={() => setactualPage('infos')}
                >
                    C'est parti !
                </Link>
            </div>
        </div>
    )
}