import { useEffect, useState } from "react";
import { api } from "../hooks/createHoks";
import { CreateUser } from "../interface/Record";

import DataTable, { TableColumn }   from "react-data-table-component";

import { Navbar } from "../components/Navbar";


export function Users(): JSX.Element  {
  const [dados, setDados] = useState<CreateUser[]>([]);

  const regex = ''

  const columns: TableColumn<CreateUser>[] = [
    {
        name: 'name',
        cell: row => row.name
    },
    {
        name: 'email',
        cell: row => row.email,
        style:{
          background: "red",
          text: "blue"
        }
        
    },

    {
      name: 'createdAt',
      cell: row => row.createdAt.replace(regex,"")     
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
        <div className="h-auto mt-10 ml-5 mr-5 rounded-t-sm border-2 border-red-600">
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
