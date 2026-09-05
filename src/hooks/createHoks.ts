import axios from "axios";


export const api = axios.create({ baseURL: "http://localhost:3000/api;" })

export async function usersPost(email: string, name: string, password: string) {
    await api.post('/insertuser/insertUsers/use', {
        name,email, password
    })
    .then((Response) => {return Response.data})
    .catch((erro) => console.error(erro))
}



