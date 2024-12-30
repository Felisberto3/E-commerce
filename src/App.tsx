import { useEffect } from "react";
import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Menu } from "./components/menu";
import MenuDialog from "./components/menuDialog";

function App() {
  // https://wpastra.com/website-templates/ecommerce/food-ordering/
  useEffect(() => {
    const mood = localStorage.getItem("mood") || "light"
    console.log(mood);

    document.querySelector("body")?.classList.add(mood)
  }, [])
  return (
    <>
      <Header />
      <Banner />
      <Menu />
    </>

  )
}

export default App
