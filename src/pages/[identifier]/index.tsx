import type {NextPage} from "next"
import { useRouter } from "next/router";
import moves from "../../data/moves.json";
import snorlax from "../../../public/snorlax.webp";
import Image from "next/image";

const Move: NextPage = () => {
    const router = useRouter()
    const { query } = router

    const move = query.identifier ? moves.find(move => move.identifier === query.identifier) : null;
  
    if (!move) {
      return <p>Loading...</p>;
    }

    const imagePath  = move.image ? `/moves/${move.image}` : snorlax;

    return (
        <>
            <main className="container mx-auto flex flex-col justify-center p-4">
                <div className="flex">
                    <div className="w-1/2 relative h-64">
                        <Image
                            src={imagePath}
                            alt="Snorlax image"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="w-12 pr-12"
                        />
                    </div>
                    
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