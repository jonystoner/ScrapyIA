import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usersPost } from "../hooks/createHoks";
import { Navbar } from "../components/Navbar";

export function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function createLogin() {
    if (name.length < 1) {
      alert("O Campo nome é obrigatorio");
    } else if (!email.length) {
      alert("Campo Email obrigatorio");
    } else if (!password.length) {
      alert("Campo Senha obrigatorio");
    } else if (name || email || password) {
      usersPost(name, email, password);
      alert("Criado com sucesso");
      navigate("/");
    } else {
      console.error(`erro ${Error}`);
    }
  }

  console.log(email, name)

  useEffect(() => { });

  return (
    <>
      <div className="bg-indigo-900 w-screen h-screen">
        <Navbar />
        <ul className="w-auto h-2 bg-white mt-5" />
        <div className="flex flex-row justify-betweenr w-screen">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-row justify-start">
              <h1 className="text-white text-4xl mt-5 text-ellipsis">
                Crie Seu Login
              </h1>
            </div>
            <div className="flex flex-col w-1/2 ml-7">
              <div className=" mt-10 gap-8 flex flex-col">
                <label className="flex flex-row gap-4 text-white">
                  Nome:
                  <input
                    type="text"
                    className="w-96 h-11 rounded-md border-2 border-gray-700 text-center text-black"
                    placeholder="Nome"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                  />
                </label>
                <label className="flex flex-row gap-4 text-white">
                  EmaiL:
                  <input
                    type="text"
                    className="w-96 h-11 rounded-md border-2 border-gray-700 text-center text-black"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </label>
                <label className="flex flex-row mt-1 gap-4 text-white">
                  Senha:
                  <input
                    type="text"
                    className="w-96 h-11 rounded-md border-2 border-gray-700 text-center text-black"
                    placeholder="*********"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    autoComplete="current-password"
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-row ml-7 justify-center">
              <button
                className=" bg-green-600 mt-7 w-20 h-14 rounded-md text-white text-2xl"
                onClick={createLogin}
              >
                Salvar
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center w-1/2 mt-7">
            <div className="">
              <img  src="phone.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
