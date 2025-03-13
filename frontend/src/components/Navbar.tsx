"use client"

import Link from "next/link";
import {signIn, useSession, signOut} from "next-auth/react";

function Navbar() {
    
    const {data: session} = useSession();

    return (
        <nav className="bg-slate-900 flex items-center py-3 justify-between px-25 text-white">
            <Link href={ '/' }>
                <h1>
                    NextGoogle
                </h1>
            </Link>

            {session?.user ? (
                <div className="flex items-center gap-x-5">
                    
                    <Link href={ '/table' }>
                        Usuarios
                    </Link>
                    
                    <Link href={ '/dashboard' }>
                        Panel
                    </Link>
                    
                    <p>{session.user.name}</p>
                    <img 
                        src= {session.user.image as string} 
                        alt="" 
                        className="w-10 h-10 rounded-full cursor-pointer" 
                    />
                    
                    <button
                        onClick={ async () => {
                            await signOut({
                                callbackUrl: '/'
                            });
                        }}
                        className="bg-sky-400 px-3 py-2 rounded cursor-pointer"
                    >
                        Cerrar sesion
                    </button>

                    <Link href={ '/profile' }>
                        Perfil
                    </Link>

                </div>
            ): (
                <button 
                    onClick={ async () => {
                        await signIn("google", {
                            callbackUrl: '/dashboard'
                        });
                    }}
                    className="bg-sky-400 px-3 py-2 rounded cursor-pointer"
                >
                    Iniciar Sesion
                </button>
            )}
        </nav>
    )
}

export default Navbar;