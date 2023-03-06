//import { useEffect } from "react";

import { FaHome, FaWhatsapp } from "react-icons/fa";

import { Link } from 'react-router-dom';




export function Home() {

  return (

    <>
      <div className="bg-black w-screen h-screen">
        <div className="flex flex-row justify-between ml-20">
          <h1 className="text-white mt-5 text-6xl text"> ScrapyAI </h1>
          <div className="flex flex-row mt-6 mr-20 gap-5">
            <button className="text-white flex flex-row gap-2 text-2xl">
              <FaHome color="white" className="mt-1" />
              Home
            </button>
            <button className="text-white flex flex-row gap-1 text-2xl">
              <FaWhatsapp color="White" className="mt-1" />
              Contatos
            </button>
            <button className=" flex flex-row w-20 h-10 bg-white text-base rounded-lg hover:bg-gray-500">
              <Link to="/Login" className="ml-4 text-start mt-1 text-xl">
                Login
              </Link>
            </button>
            
          </div>
        </div>
        <ul className="w-screen h-2 bg-white mt-5" />
        <div className="mt-28 ml-20 flex flex-row justify-between">
          <div className="text-white w-2/6 text-4xl">
            <strong>ScrapyAI: Uma nova maneira de ler dados de for mar agil inteligente e rapida aprendendo com você e te mostrando as maiores tendencias </strong>
            <button className=" rounded-md bg-purple-500 text-white w-96 h-12 mt-10"> Baixe Nosso APP </button>
          </div>
          <div className="mr-20 h-52">
            <img src="img1.png" alt="" />
          </div>
        </div>
      </div>

    </>

  );
}

export default Home;
