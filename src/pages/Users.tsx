import { useEffect, useState } from "react";
import { api } from "../hooks/createHoks";
import { CreateUser } from "../interface/Record";

export function Users() {
  const [dados, setDados] = useState<CreateUser[]>();

  useEffect(() => {
    api.get("/users", {}).then((response) => {
      setDados(response.data);
    });
  }, []);

  return (
    <>
    <div className="w-screen h-screen bg-black">
      {dados?.map((user) => (
        <div className="w-28 h-28 bg-white">
          <h1>{user?.name}</h1> 
          <h2>{user.email}</h2>         
       </div>
      ))}
      </div>
    </>
  );
}
export default Users;
