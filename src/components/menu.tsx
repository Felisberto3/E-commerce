import { PiShoppingCartBold } from "react-icons/pi"
import item from "../assets/caxorro.jpg"
import { shoppStore } from "../utils/zustand"
import { formatted } from "../utils/formatCurrency";

export function Menu() {
    const { products, increase, cart } = shoppStore()

    return (
        <div className=" max-w-[1101px] mx-auto">
            <h1 className="text-center p-2 text-5xl">Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 *:border *:p-3">
                {
                    products.map(({ id, name, price }) => {
                        const total = cart.find(item => item.id === id)?.total

                        return <div className="border mx-auto scroll-m-4" key={id}>
                            <img src={item} alt="" className="p-2 mx-auto" />

                            <h2 className="text-center py-2 text-xl">{name}</h2>
                            <h2 className="text-center  text-xl bg-slate-300 rounded-full py-2 ">{formatted.format(price)}</h2>
                            <button
                                onClick={() => increase(id)}
                                className="text-center text-xl bg-yellow-600 rounded-full mt-4 flex items-center gap-2 px-4 py-2 cursor-pointer"><PiShoppingCartBold /> <span>COMPRAR  {total}</span>
                            </button>
                        </div>
                    })
                }


            </div>
        </div >
    )

}
