import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { LuMoveLeft } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

const MenuDialog = () => (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <div className="p-2 border rounded-full hover:cursor-pointer dark:text-slate-200 md:hidden">
                <IoMenu size={40} />
            </div>
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-black bg-opacity-50" />
            <Dialog.Content className="dark:bg-gray-900 dark:text-gray-300  fixed left-1/2 top-1/2 max-h-[85vh] w-[70vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                <Dialog.Title />
                <Dialog.Description />
                <Dialog.Close asChild>
                    <div>
                        <div className="flex gap-3 py-3 px-2 rounded-md items-center cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-700">
                            <LuMoveLeft />
                            Voltar
                        </div>

                        <ul className="py-4 flex flex-col gap-1 *:py-2.5 *:px-2  ">
                            <a href="#home" className="hover:bg-slate-100 dark:hover:bg-gray-700 hover:rounded-md"><li className="flex items-center gap-4 "> <FaHome size={22} /><span>HOME</span></li></a>
                            <a href="#offers" className="hover:bg-slate-100 dark:hover:bg-gray-700 hover:rounded-md"><li className="flex items-center gap-4 "> <MdLocalOffer size={22} /><span>OFFERS</span></li></a>
                            <a href="#about" className="hover:bg-slate-100 dark:hover:bg-gray-700 hover:rounded-md"><li className="flex items-center gap-4 ">  <MdLocalOffer size={22} /><span>ABOUT</span></li></a>
                            <a href="#contact" className="hover:bg-slate-100 dark:hover:bg-gray-700 hover:rounded-md"><li className="flex items-center gap-4 "> <FaPhone /><span>CONTACT</span></li></a>
                            <a href="#contact" className="hover:bg-slate-100 dark:hover:bg-gray-700 hover:rounded-full "><li className="flex items-center gap-4 ">  <PiShoppingCartBold size={22} /><span>COMPRAR</span></li></a>
                        </ul>

                    </div>
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root >
);

export default MenuDialog;
