import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
    <div className="bg-indigo-900 w-auto h-screen">
      <Navbar />      
      <ul className="w-auto h-2 bg-white mt-5"/>
        <div className=" mt-3 flex flex-row justify-between" >
          <div className=" ml-7 text-purple-100 flex flex-col justify-center text-9xl w-2/6">
            <strong>
                Sempre Conectado
            </strong>
          </div>
          <div className="mr-7 mt-7 justify-start h-72 ">
            <img className="rounded-md" src="phone.png" alt="" />
          </div>
        </div>
        <div className="flex flex-row">
          <button className="text-3xl mt-10 ml-7 w-80 h-20 rounded-3xl bg-red-700 text-white ">
             Saiba Mais
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
