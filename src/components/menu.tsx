import { PiShoppingCartBold } from "react-icons/pi"
import item from "../assets/caxorro.jpg"
export function Menu() {
    const products = [
        { name: "McDonald's", price: 324, img: "img/caminho" },
        { name: "Burger King", price: 324, img: "img/caminho" },
        { name: "KFC (Kentucky Fried Chicken)", price: 324, img: "img/caminho" },
        { name: "Taco Bell", price: 324, img: "img/caminho" },
        { name: "Subway", price: 324, img: "img/caminho" },
        { name: "Wendy's", price: 324, img: "img/caminho" },
        { name: "Domino's Pizza", price: 324, img: "img/caminho" },
        { name: "Pizza Hut", price: 324, img: "img/caminho" },
        { name: "Five Guys", price: 324, img: "img/caminho" },
        { name: "Chick-fil-A", price: 324, img: "img/caminho" },
    ]
    return (
        <div className=" max-w-[1101px] mx-auto">
            <h1 className="text-center p-2 text-5xl">Menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4 *:border *:p-3">
                {
                    products.map(eachItem => {
                        return <div className="border mx-auto">
                            <img src={item} alt="" className="p-2 mx-auto" />

                            <h2 className="text-center py-2 text-xl">{eachItem.name}</h2>
                            <h2 className="text-center  text-xl bg-slate-300 rounded-full py-2 ">14 000 kz</h2>
                            <button className="text-center  text-xl bg-yellow-600 rounded-full mt-4 flex items-center gap-2 px-4 py-2 cursor-pointer"><PiShoppingCartBold /><span>COMPRAR</span> </button>
                        </div>
                    })
                }


            </div>
        </div >
    )

}
