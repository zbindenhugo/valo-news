import { Link } from "react-router-dom";

export default function Infos(){
    return(
        <div className="text-center text-white w-[100vw] h-[80vh]">
            
            <div className="font-bold text-4xl sm:text-6xl mt-10">
                Valorant c'est quoi ?
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 p-20 gap-10">
                <div className="text-justify">
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
                <div className="text-justify">
                    <h1 className="text-center italic text-2xl font-bold underline mb-5">C'est comme CS non ?</h1>
                    <p>Si ce mode de jeu vous parrait famillier, c'est normal, il est basé sur un jeu très connu nommé CS GO.</p>
                    <p>Mais Valorant se démarque par le biais de son gameplay. La présence d'Agents, fait toute la différence tous différents les uns des autres sont un point majeur de Valorant.</p>
                    <p>Des agents, il y en a pour tous les goûts ! Que vous soyez le pro de l'aim, et que vous aimez des duels, alors les Duelistes sont fait pour vous</p>
                    <p>Il y a aussi les Initiateurs, les Sentinelles etc... Si vous voulez en savoir plus, cliquez <Link to='/agents' className="text-red-600 transition-all duration-150 hover:tracking-wider">ICI</Link> pour aller voir tous les agents du jeu !</p>
                </div>
                <div className="text-justify">
                    <h1 className="text-center italic text-2xl font-bold underline mb-5">Mais y'a que ce mode la ?</h1>
                    <p>Valorant est un jeu très complet, et propose des modes de jeu plus simple. Voici tous les modes de jeux que propose Valorant :</p>
                    <ol className="list-disc ml-10 mt-5">
                        <li>Standard, le mode de jeu par défaut. Durée de la partie ~30/40 mins</li>
                        <li>Competitive, pareil que le mode standard, mais avec un système de rang. Durée de la partie ~30/40 mins</li>
                        <li>Combat à mort, un mode de jeu chacun pour soi. Durée de la partie ~7/9 mins</li>
                        <li>Spike Rush, Mode de jeu ou le but est de poser la bombe rapidement. Durée de la partie ~8/12 mins</li>
                    </ol>
                    <p>Il en existe d'autres, mais les quatres ci-dessus sont les plus joués. Si vous voulez avoir un aperçu des autres modes, téléchargez le jeu ! Il est gratuit en plus.</p>
                </div>
            </div>
        </div>
    )
}