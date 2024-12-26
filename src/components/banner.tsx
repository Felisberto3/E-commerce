
import caxorro from "../assets/delicious-burger.jpg"
export const Banner = () => {
    return (
        <div className="h-screen border relative max-w-[1101px] mx-auto sm:text-red-50  px-2">
            <img src={caxorro} className=" absolute inset-0  block w-full h-full object-cover dark:brightness-50 dark:contrast-125" alt="" />
            <div className="absolute right-0 top-0 text-slate-700 bg-white dark:bg-dark dark:bg-opacity-30  bg-opacity-50 p-3 rounded-lg">
                <p className="text-2xl">Fácil e conveniente</p>
                <h1 className="text-5xl font-bold lg:text-7xl   ">Preço baixo, <br />  qualidade alta</h1>
                <p className="text-lg">Pague menos por suas marcas favoritas</p>
            </div>
        </div>
    )
}

// / <p className="text-3xl">Fácil e conveniente</p>
// <h1 className="text-5xl font-bold lg:text-7xl">Preço baixo, <br />  qualidade alta</h1>
// <p className="text-xl">Pague menos por suas marcas favoritas</p>