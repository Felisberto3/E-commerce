import { useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import MenuDialog from "./menuDialog";
export const Header = () => {
    const [on, seton] = useState<boolean>(false);

    const handleCard = () => seton(!on);

    return (
        <header className="font-roboto flex items-center justify-between gap-2 px-5 py-3  max-w-7xl mx-auto dark:bg-dark" >
            <div className=" text-xl border border-slate-200 p-1.5 rounded-sm dark:text-slate-100 ">Feli | Shopp</div>
            <div>


                <MenuDialog />

                {/* {on && (
                    <ul className="w-svw  p-5 bg-slate-400 z-10 fixed left-0 bottom-0 top-0 translate-x-1 duration-500 ease-in-out ">
                        <li onClick={handleCard} className="flex gap-2 justify-between py-4 border-b-2 text-lg items-center cursor-pointer"> <span>Voltar</span><LuMoveLeft size={30} /></li>
                        <li>HOME</li>
                        <li>MENU</li>
                        <li>OFFERS</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>)
                } */}

                <ul className="hidden md:flex flex-row gap-2 items-center dark:text-slate-200 *:cursor-pointer ">
                    <li>HOME</li>
                    <li>MENU</li>
                    <li>OFFERS</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li className="px-3.5 py-2 rounded-full border-2  dark:hover:text-slate-400  dark:hover:border-slate-400">DOWNLOAD</li>
                </ul>



            </div>
        </header>
    )
}