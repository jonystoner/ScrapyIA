import { useEffect, useState } from "react";
import { api } from "../hooks/createHoks";
import { CreateUser } from "../interface/Record";

import DataTable, { TableColumn } from "react-data-table-component";

import { Navbar } from "../components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";

export function Users(): JSX.Element {
  const [dados, setDados] = useState<CreateUser[]>([]);

  const [shownav, setShowNav] = useState(false);

  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-GB");

  const [temperature, setTemperature] = useState("");

 
  const columns: TableColumn<CreateUser>[] = [
    {
      name: "Nome",
      cell: (row) => row.name,
      style: {
        background: "blue",
      },
    },
    {
      name: "Email",
      cell: (row) => row.email,
      style: {
        background: "red",
      },
    },

    {
      name: "Data de Criação",
      cell: (row) => row.createdAt.trimStart(),
      style: {
        background: "green",
      },
    },
  ];

  useEffect(() => {
    api.get("/users", {}).then((response) => {
      return setDados(response.data);
    });
  }, []);


  return (
    <>

      <div className="">
        <div className='bg-black'>
          <div className="">
            <GiHamburgerMenu
              className="w-10 h-10 ml-3 cursor-pointer text-white"
              onClick={() => setShowNav(!shownav)}
            />
            {shownav && (
              <div className="absolute left-0 bg-white shadow-lg">
                <Navbar />
              </div>
            )}
          </div>
        </div>
        <ul className="w-auto h-2 bg-white mt-5" />
        <div className=" flex flex-col h-auto mt-10 ml-5 mr-5 rounded-t-sm border-2 border-red-600">
          <div className="text text-white"> {formattedDate} </div>
          <DataTable
            title="Daddos dos Usuários"
            data={dados}
            columns={columns}
            pagination
            selectableRows
          />
        </div>

        <div>
          <div>
            <input className="bg-blue-900 rounded"
              type="text"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
            
            <button className="bg-green-900" type="button">
                clique aqui 
            </button>
            
          </div>

        </div>
      </div>
    </>
  );
}
export default Users;
