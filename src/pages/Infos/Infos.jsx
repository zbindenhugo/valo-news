import { Link } from "react-router-dom";

export default function Infos(){
    return(
        <div className="text-center text-white">
            
            <div className="font-bold text-4xl sm:text-6xl mt-10">
                Valorant c'est quoi ?
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 p-20">
                <div className="text-left">
                    <h1 className="text-center italic text-2xl font-bold underline mb-5">Les bases</h1>
                    <p>Valorant est un jeu de tire en vue à la première personne développé et édité par 
                        <a className="text-red-600 transition-all duration-150 hover:tracking-wider" href="https://www.riotgames.com/fr" target="_blank" > Riot Games</a>.
                    </p>
                    <p>Ce jeu se passe sur plusieurs cartes et oppose 2 équipes de 5 joueurs.</p>
                    <p>Les règles du jeu sont simple, 2 équipes s'affronte, l'une est attaquante, l'autre défends 2 à 3 site. L'équipe qui attaque a 2 objectifs : </p>
                    <ol className="list-disc ml-10 mt-2">
                        <li>Éliminer l'entièreté de l'équipe adverse.</li>
                        <li>Planter la bombe et la défendre jusqu'à ce que celle-ci explose.</li>
                    </ol>
                    <p>Le rôle des défenseurs eux, est de protéger les site où la bombe doit être planté, pour gagner ils doivent éliminer les attaquants, et désamorcer la bombe si celle-ci a été plantée.</p>
                    <p>Pour en savoir plus vous pouvez aller sur le site officiel de Valorant <a className="text-red-600 transition-all duration-150 hover:tracking-wider" href="https://playvalorant.com/fr-fr/" target="_blank" > ICI</a>.</p>
                </div>
                <div>
                    <h1 className="text-center italic text-2xl font-bold underline mb-5">C'est comme CS non ?</h1>
                    <p>Si ce mode de jeu vous parrait famillier, c'est normal, il est basé sur un jeu très connu nommé CS GO.</p>
                    <p>Mais Valorant se démarque par le biais de son gameplay. La présence d'Agents, fait toute la différence tous différents les uns des autres sont un point majeur de Valorant.</p>
                    <p>Des agents, il y en a pour tous les goûts ! Que vous soyez le pro de l'aim, et que vous aimez des duels, alors les Duelistes sont fait pour vous</p>
                    <p>Il y a aussi les Initiateurs, les Sentinelles etc... Si vous voulez en savoir plus, cliquez <Link to='/agents' className="text-red-600 transition-all duration-150 hover:tracking-wider">ICI</Link> pour aller voir tous les agents du jeu !</p>
                </div>
                <div>
                    <h1 className="text-center italic text-2xl font-bold underline mb-5">Mais y'a que ce mode la ?</h1>
                </div>

            </div>
        </div>
    )
}