import axios from "axios";


export const api = axios.create({ baseURL: "http://localhost:5001" })

export async function usersPost(name: string, email: string, password: string) {
    await api.post('/users', {
        name, email, password
    })
    .then((Response) => {return Response.data})
    .catch((erro) => console.error(erro))
}



