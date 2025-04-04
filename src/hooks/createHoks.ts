import axios from "axios";


export const api = axios.create({ baseURL: "http://localhost:3001" })

export async function usersPost(email: string, name: string, password: string) {
    await api.post('/users', {
        email, password
    })
    .then((Response) => {return Response.data})
    .catch((erro) => console.error(erro))
}



