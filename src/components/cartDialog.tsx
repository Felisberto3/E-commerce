import * as Dialog from "@radix-ui/react-dialog";
import { PiShoppingCartBold } from "react-icons/pi";
import item from "../assets/caxorro.jpg"
import { Icart, shoppStore } from "../utils/zustand";
import { formatted } from "../utils/formatCurrency";
import { LuPlus } from "react-icons/lu";
import { FaMinus } from "react-icons/fa6";

const CartShopping = () => {
    const { products, cart, increase, decrease } = shoppStore()
    let totalBuyIng = 0
    cart.forEach(({ id, total }) => {
        const price = products.find(item => item.id === id)!.price

        totalBuyIng += total * price
    })
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div className="px-3.5 py-2 rounded-full border  dark:hover:text-slate-400  dark:hover:border-slate-400"><PiShoppingCartBold size={30} /></div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow bg-black bg-opacity-50" />
                <Dialog.Content className=" dark:bg-gray-900 dark:text-gray-300  fixed left-1/2 top-1/2 max-h-fit w-[70vw] md:w-[50vw] lg:w-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                    <Dialog.Title />
                    <Dialog.Description />
                    <Dialog.Close asChild>

                    </Dialog.Close>
                    <div className="">
                        <h1 className="text-center p-2 text-xl ">Compras Feitas</h1>
                        <h1 className="text-center p-2 ">Total: {formatted.format(totalBuyIng)}</h1>
                        <div className=" border grid grid-cols-1 gap-4 max-h-[80vh] max-h-[80vh] overflow-y-auto py-2">
                            {
                                cart.map(({ id, total }: Icart) => {
                                    const product = products.find(item => item.id === id)

                                    if (product) {
                                        const { id, name, price } = product
                                        return <div className="border mx-auto min-w-[90%] " key={id}>
                                            <div className="flex   flex-col items-center justify-between ">
                                                <img src={item} alt="" className="block p-2 min-w-40 max-w-40 mx-auto" />

                                                <div className=" w-[100%]">
                                                    <h2 className="text-center py-2 text-xl">{name}</h2>
                                                    <h2 className="text-center  text-lg bg-slate-300 rounded-full py-2 ">{formatted.format(price)}</h2>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-evenly mt-4">
                                                <button
                                                    onClick={() => increase(id)}
                                                    className="text-center text-xl bg-yellow-600 rounded-full  px-4 py-2 cursor-pointer"><LuPlus />
                                                </button>
                                                <span>{total}</span>
                                                <button
                                                    onClick={() => decrease(id)}
                                                    className="text-center text-xl bg-yellow-600 rounded-full  px-4 py-2 cursor-pointer"><FaMinus />
                                                </button>

                                            </div>
                                        </div>
                                    }

                                    return <div>Sem Compras</div>
                                })
                            }


                        </div>
                    </div >
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root >
    )
};

export default CartShopping;
