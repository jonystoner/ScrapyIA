import { useEffect, useState } from "react";
import { api } from "../hooks/createHoks";
import { CreateUser } from "../interface/Record";

import DataTable, { TableColumn } from "react-data-table-component";

import { Navbar } from "../components/Navbar";

export function Users(): JSX.Element {
  const [dados, setDados] = useState<CreateUser[]>([]);

  const date = new Date();

  const formattedDate = date.toLocaleDateString("en-GB");

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
      setDados(response.data);
    });
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-black">
        <Navbar />
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
      </div>
    </>
  );
}
export default Users;
