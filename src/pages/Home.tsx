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
