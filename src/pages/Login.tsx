
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


export function Login() {

  return (
    <>
      <div className="bg-black w-screen h-screen">
        <div className="flex flex-row justify-between ml-20">
          <h1 className="text-white mt-5 text-6xl text"> ScrapyAI </h1>
          <div className="flex flex-row mt-6 mr-20 gap-5">
            <button className=" text-white flex flex-row gap-2">
              <FaHome color="White" className="mt-1 w-7 h-6"/>
              <Link to="/" className=" text-start  text-2xl">
                Home
              </Link>
            </button>
            <button className="text-white flex flex-row gap-1 text-2xl">

              <FaWhatsapp color="White" className="mt-1" />
              Contatos
            </button>
          </div>
        </div>
        <ul className="w-screen h-2 bg-white mt-5" />

      </div>

    </>

  )
};
export default Login;