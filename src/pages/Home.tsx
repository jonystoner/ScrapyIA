import { useEffect } from "react";

import { Navbar } from "../components/Navbar";
import Dashboard from "./Dashboard";
import Clothing from "../components/clothing";

export function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="w-full">
      <Navbar />

      <main>
        <section className="w-full">
          <Dashboard />
        </section>

        <section>
          <Clothing />
        </section>
      </main>
    </div>
  );
}

export default Home;