import React from "react";
import type { NextPage } from "next";
import { notFound } from "next/navigation";
import moves from "../../data/moves.json";
import snorlax from "../../../public/snorlax.webp";
import Image from "next/image";
import typeColours from "../../data/type-colours";
import type { Move } from "../../types/moves";

export async function getServerSideProps(context: { params: { identifier: string } }) {
    const { identifier } = context.params;

    const move = moves.find(move => move.identifier === identifier) || null;

    if(!move) {
        notFound();
    }

    return {
        props: {
            move,
        },
    };
}

const Move: NextPage<{ move: Move }> = ({ move }) => {

    const imagePath = move.image ? `/moves/${move.image}` : snorlax;
    const typeColour = move.type ? typeColours[move.type] : '#f1e5d7';

    return (
        <>
            <main className="container mx-auto flex flex-col justify-center p-4">
                <div className="flex justify-between items-center ">
                    <div className="w-1/2 relative h-64">
                        <Image
                            src={imagePath}
                            alt={move.name || "Move image"}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="w-12 pr-12"
                        />
                    </div>
                    
                    <div className="w-1/2 rounded-lg border-8" style={{ borderColor: typeColour }}>
                        <table className="table-fixed w-full">
                            <tbody>
                                <tr>
                                    <td className="p-2 uppercase">Name</td>
                                    <td className="capitalize">{move.name}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 uppercase">Type</td>
                                    <td className="capitalize">{move.type}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 uppercase">Damage</td>
                                    <td className="capitalize">{move.damage}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 uppercase">PP</td>
                                    <td className="capitalize">{move.pp}</td>
                                </tr>
                                <tr>
                                    <td className="p-2 uppercase">Damage Potential</td>
                                    <td className="capitalize">{move.damage * move.pp}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Move;
