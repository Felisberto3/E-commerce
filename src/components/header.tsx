import { useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import MenuDialog from "./menuDialog";
import { PiShoppingCartBold } from "react-icons/pi";
export const Header = () => {
    const [on, seton] = useState<boolean>(false);

    const handleCard = () => seton(!on);

    return (
        <header className=" flex items-center justify-between gap-2 px-2 py-3  max-w-[1101px] mx-auto  z-[2rem] dark:bg-dark" >
            <div className=" text-xl border border-slate-200 p-1.5 rounded-sm dark:text-slate-100 ">Feli | Shopp</div>
            <div>


                <MenuDialog />



                <ul className="hidden md:flex flex-row gap-2 items-center dark:text-slate-200 *:cursor-pointer ">
                    <li>HOME</li>
                    <li>MENU</li>
                    <li>OFFERS</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li className="px-3.5 py-2 rounded-full border-2  dark:hover:text-slate-400  dark:hover:border-slate-400"><PiShoppingCartBold size={30} /></li>
                </ul>



            </div>
        </header>
    )
}