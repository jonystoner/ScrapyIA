import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import Dashboard from "./Dashboard";
import Clothing from "../components/clothing";



export function Home() {

  const [shownav, setShowNav] = useState(false);

  const handleSubmit = () => {
    return setShowNav(!shownav)
  }

  return (
    <>
      <div>
        <Navbar/>
        <div className="w-full pt-2"> 
          <div className="flex flex-shrink-0 gap-3 justify-center">
            <a href="">INICÍO</a>
            <a href="">PRODUTOS</a>
            <a href="">TROCAS E DEVOLUÇÕES</a>
            <a href="">QUEM SOMOS </a>
            <a href="">CONTATO</a>
            <a href="">POLITICA E PRIVACIDADE </a>
          </div>
        </div>
        <div className="w-full">
          <Dashboard/>
        </div>
        <div>
          <Clothing/>
        </div>
      </div>
    </>
  );
}

export default Home;
