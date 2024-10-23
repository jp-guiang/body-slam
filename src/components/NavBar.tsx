import React from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "../../public/favicon.ico"

export const NavBar = () => {
    return (
        <>
            <div className="flex sticky top-0">
                <Link href="/" className="flex m-2 p-1 h-full rounded-md justify-start items-center bg-[#29738e]">
                    <Image
                        src={favicon}
                        alt="Snorlax"
                        className="w-full"
                    />
                    <p className="flex p-2 text-base text-[#f1e5d7] uppercase">Home</p>
                </Link>
            </div>
        </>
    )
    
}