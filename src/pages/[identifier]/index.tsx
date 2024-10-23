import type {NextPage} from "next"
import { useRouter } from "next/router";
import moves from "../../data/moves.json";
import snorlax from "../../../public/snorlax.webp";
import Image from "next/image";

const Move: NextPage = () => {
    const router = useRouter()
    const { query } = router

    const move = moves.find(move => move.identifier === query.identifier)

    return (
        <>
            <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
                <div className="flex">
                    <Image
                        src={snorlax}
                        alt="Snorlax image"
                        height={513}
                        className="pr-12"
                    />
                    <div>
                        <p>Name: {move?.name}</p>
                        <p>Type: {move?.type}</p>
                        <p>Damage: {move?.damage}</p>
                        <p>PP: {move?.pp}</p>
                        <p>Potential Damage: {move?.damage * move?.pp}</p>
                    </div>
                    
                </div>
            </main>
        </> 
    )
}

export default Move