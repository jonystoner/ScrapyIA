import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <>
      <div className="bg-black w-screen h-screen">
        <Navbar />
        <ul className="w-screen h-2 bg-white mt-5" />
        <div className="mt-28 ml-20 flex flex-row justify-between">
          <div className="text-white w-2/6 text-4xl">
            <strong>
              ScrapyAI: Uma nova maneira de ler dados de for mar agil
              inteligente e rapida aprendendo com você e te mostrando as maiores
              tendencias{" "}
            </strong>
            <button className=" rounded-md bg-purple-500 text-white w-96 h-12 mt-10">
              {" "}
              Baixe Nosso APP{" "}
            </button>
          </div>
          <div className="mr-20 h-52">
            <img src="img1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
