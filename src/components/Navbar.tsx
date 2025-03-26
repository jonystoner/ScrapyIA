import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal } from "./Modal"

export const Navbar = () => {

  const [showNav, setShowNav] = useState(false)


  //const navigate = useNavigate();

  return (
    <>
      <nav className="w-full h-auto drop-shadow-md bg-black">
        <div className="w-full flex flex-row justify-between pr-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <div className="relative">
                <GiHamburgerMenu
                  className="w-7 h-10 cursor-pointer text-white"
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
          <div className="">
            <img src="image.png" alt="logo da empresa" className="w-36" />
          </div>
          <div className="flex flex-col justify-center text-white">
            Registre-se
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;