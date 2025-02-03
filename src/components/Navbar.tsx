import { FaHome, FaWhatsapp, FaSignInAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-indigo-900 flex flex-row justify-between w-auto h-24">
        <h1 className="text-white ml-7 mt-5 text-6xl text"> ScrapyAI </h1>
        <div className="flex flex-row  mt-6 mr-7 gap-5">
          <button onClick={() => navigate('/')} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-slate-800 transition  h-11 duration-300 flex flex-row  justify-center gap-1">
            <FaHome className="mt-1 " />
            Home
          </button>
          <button onClick={() => navigate('/Contatos')} className="bg-white text-black px-4 py-2 rounded-lg hover:bg-slate-800 transition  h-11 duration-300 flex flex-row  justify-center gap-1" >
            <FaWhatsapp className="mt-1"/>
            Contatos
          </button>
          <button onClick={() => navigate('/Login')} className="bg-white text-black px-4 py-2 rounded-lg flex flex-row gap-1 hover:bg-slate-800 transition  h-11 duration-300 w-28 ">
            <FaSignInAlt className="mt-1"/> 
            Login
          </button>
        </div>
      </div>
    </>
  );
};
