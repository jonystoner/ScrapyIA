import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "./Modal"
import { Link } from "react-router-dom";

export const Navbar = () => {

  const [showNav, setShowNav] = useState(false)


  //const navigate = useNavigate();

  return (
    <>
      <nav className="w-full h-auto drop-shadow-md pt-3">
        <div className="w-full flex flex-row justify-between px-8">
          <div className="flex flex-col justify-center">
            <div className="">
              <div className="relative">
                <GiHamburgerMenu
                  className=" w-7 h-10 cursor-pointer text-black"
                  onClick={() => setShowNav(!showNav)}
                />
                {showNav && (
                  <div className="absolute">
                    <Modal />
                  </div>
                )}
              </div>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/">
                <img src="logo.png" alt="logo da empresa" className="w-44" />
              </Link>
            </li>
          </ul>
          <div className="flex flex-col justify-center">
          <ul className="flex flex-row  gap-2 text-black text-xs">
            <li><Link to="/Register">Cadastre-se |</Link></li>
            <li><Link to="/Login">Iniciar Sessão</Link></li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;