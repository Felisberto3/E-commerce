import { create } from "zustand";

const products = [
    { id: "1", name: "McDonald's", price: 18350, },
    { id: "2", name: "Burger King", price: 15000, },
    { id: "3", name: "KFC (Kentucky Fried Chicken)", price: 12350, },
    { id: "4", name: "Taco Bell", price: 1100, },
    { id: "5", name: "Subway", price: 19450, },
    { id: "6", name: "Wendy's", price: 20350, },
    { id: "7", name: "Domino's Pizza", price: 18350, },
    { id: "8", name: "Pizza Hut", price: 18350, },
    { id: "9", name: "Five Guys", price: 18350, },
    { id: "10", name: "Chick-fil-A", price: 18350.32 },
]
interface Iproducts {
    id: string;
    name: string;
    price: number
}
interface Icart {
    id: string,
    total: number
}


interface shoppStoreStates {
    products: Iproducts[],
    cart: Icart[],
    increase: (id: string) => void,
    decrease: (id: string) => void
}
export const shoppStore = create<shoppStoreStates>((set) => ({
    products,
    cart: [],
    increase: (id: string) => set((state) => {
        const existe = state.cart.some(item => item.id === id)

        if (existe) {
            return { cart: state.cart.map(item => item.id === id ? { ...item, total: item.total + 1 } : item) }
        }

        return { cart: [...state.cart, { id, total: 1 }] }
    }),
    decrease: (id: string) => set((state) => {
        const existItemToDelete = state.cart.some(item => item.id === id && item.total === 1)

        if (existItemToDelete) {
            return { cart: state.cart.filter(item => item.id !== id) }
        }

        return { cart: state.cart.map(item => item.id === id ? { ...item, total: item.total - 1 } : item) }

    })
}))