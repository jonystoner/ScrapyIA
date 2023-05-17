//import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { usersPost } from "../hooks/createHoks";


export function Login() {
  const navigate = useNavigate(); 

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  function createLogin() {
   if (name.length < 1) {
     alert("O Campo nome é obrigatorio");
   }
   else if(email.length < 1){
    alert("Campo Email obrigatorio")
  }
  else if(password.length < 1){
    alert("Campo Senha obrigatorio")
  }
  else {

  }
  usersPost(name,email,password)
  navigate("/") 
  }


  return (
    <>
      <div className="bg-black w-auto h-screen">
        <div className="flex flex-row justify-between ml-14">
          <h1 className="text-white mt-5 text-6xl text"> ScrapyAI </h1>
          <div className="flex flex-row mt-6  gap-5">
            <button className=" text-white flex flex-row gap-2">
              <FaHome color="White" className="mt-1 w-7 h-6" />
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
        <ul className="w-auto h-2 bg-white mt-5" />
        <div className="flex flex-col ml-14">
          <h1 className="text-white text-4xl mt-5 text-ellipsis">
            Crie Seu Login
          </h1>
        </div>
        <form className=" mt-6 ml-10  w-auto flex flex-row">
          <label className="flex flex-col text-white">
            Nome:
            <input
              type="text"
              className="w-96 rounded-md border-2 border-gray-700 text-center text-black"
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </label>
          <label className=" text-white flex flex-col ml-5">
            EmaiL:
            <input
              type="text"
              className="w-96 rounded-md border-2 border-gray-700 text-center text-black"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </label>
        </form>
        <form className="flex flex-row  gap-5 ml-10 mt-7 w-24 h-8"> 
          <label className="text-white">
            Whathsap:
            <input 
              type="text"
              className="w-96 rounded-md border-2 border-gray-700 text-center text-black"
              placeholder="Whathsap"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </label>
          <label className="text-white">
            Senha:
            <input 
              type="text"
              className="w-96 rounded-md border-2 border-gray-700 text-center text-black"
              placeholder="senha"

            />
          </label>
        </form>
        <div className="flex flex-row justify-end w-1/2 mt-10">
          <button className="w-12 h-12 rounded-md bg-white" onClick={createLogin} >criar</button>
        </div>
        
      </div>
    </>
  );
}
export default Login;
