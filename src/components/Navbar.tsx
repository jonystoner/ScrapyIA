import { FaHome, FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className=" bg-indigo-900 flex flex-row justify-between w-auto h-24">
        <h1 className="text-white ml-7 mt-5 text-6xl text"> ScrapyAI </h1>
        <div className="flex flex-row  mt-6 mr-7 gap-5">
          <button className="text-white flex flex- gap-2 text-2xl">
            <Link to="/" className=" flex flex-row gap-2 ml-4 text-start mt-1 text-xl">
              <FaHome color="white" className="mt-1" />
              Home
            </Link>
          </button>
          <button className="text-white flex flex-row text-2xl">
            <Link to="/Contatos" className="flex flex-row gap-2 ml-4 text-start mt-1 text-xl">
              <FaWhatsapp color="White" className="mt-1" />
              Contatos
            </Link>
          </button>
          <button className=" flex flex-row w-20 h-10 bg-white text-base rounded-lg hover:bg-gray-500">
            <Link to="/Login" className="flex flex-row gap-2 ml-4 text-start mt-1 text-xl">
              Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
