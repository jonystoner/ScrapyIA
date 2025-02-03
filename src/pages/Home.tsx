import { Navbar } from "../components/Navbar";
import { Info } from "../pages/Info";

export function Home() {
  return (
    <>
      <div className="bg-indigo-900 w-auto h-screen flex-row justify-between  ">
        <Navbar />
        <ul className="w-auto h-2 bg-white mt-5" />
        <div className=" mt-3 flex flex-row w-auto justify-between">
          <div className=" ml-7 text-purple-100 flex flex-col justify-center text-9xl w-2/6">
            <strong>
              Sempre
              conectado
            </strong>
            <div className="">
              <button className="text-3xl mt-10 ml-7 w-64 h-20 rounded-full bg-red-900 text-white ">
                Saiba Mais
              </button>
            </div>
          </div>
          <div className="mr-7">
            <img className="rounded-2xl shadow-xl" src="phone.png" alt="" />
          </div>
        </div>
      </div>
      <Info />
    </>
  );
}

export default Home;
