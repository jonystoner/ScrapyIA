

export const Clothing = () => {
  return (
    <>
      <div className="flex flex-row justify-center pt-14">
        <h1 className="text-3xl"> Summer 2025 </h1>
      </div>
      <div className="grid grid-cols-4 pt-20 w-full">
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="colete azul marinho.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="conjunto preto.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="gift.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco </span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-x-2">
          <img
            src="vestidoverde.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 pt-40 w-auto">
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="vestido.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="vestido.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
        <div className="flex flex-col items-center text-center space-y-2">
          <img
            src="vestido.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco </span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
        <div className="flex flex-col items-center text-center mt-3">
          <img
            src="vestido.png"
            alt="Vestido branco"
            className="w-72"
          />
          <span className="text-lg font-semibold">Vestido branco</span>
          <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
            Comprar
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center pt-12">
        <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"> Ver tudo </button>
      </div>
    </>
  )
}

export default Clothing;