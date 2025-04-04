import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { usersPost } from '../hooks/createHoks';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [shownav, setShowNav] = useState(false);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!email) newErrors.email = "O campo email é obrigatório";
        if (!password) newErrors.password = "O campo senha é obrigatório";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await usersPost(email, name,password);
            alert("Conta criada com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao criar conta:", error);
            alert("Erro ao criar conta. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.title = "Login";
     }, []);

    return (
        <div className='h-svh'>
            <Navbar />
            <div className="min-h-screen flex  justify-center">
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Bem-vindo de volta!</h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 disabled:bg-gray-300"
                            >
                                {loading ? "Criando..." : "Entrar"}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">ou</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
                        >   
                            Criar uma Conta
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;