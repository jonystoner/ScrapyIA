import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-black w-auto h-screen ">
        <ul className=" bg-white h-1 w-auto" />
        <div className=" mt-3 flex flex-row justify-between" >
          <div className="text-white flex flex-row w-2/6 text-4xl">
            <strong>
              ScrapyAI: Uma nova maneira de ler dados de for mar agil
              inteligente e rapida aprendendo com você e te mostrando as maiores
              tendencias{" "}
            </strong>
          </div>
          <div className="w-1/3 mr-7 justify-center">
            <img src="img1.png" alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-start">
          <button className="ml-7 rounded-md bg-purple-500 text-white ">
            {" "}
            Baixe Nosso APP{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
