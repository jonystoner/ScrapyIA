import { useEffect, useState } from 'react';
import { usersPost } from '../hooks/createHoks';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!name) newErrors.name = "O campo nome é obrigatório";
        if (!password) newErrors.password = "O campo senha é obrigatório";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await usersPost(name,email, password);
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
        document.title = "Cadastro";
    }, []);

    return (
        <div className='h-svh'>
            <Navbar />
            <div className="min-h-screen flex  justify-center">
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Crie seu Cadastro!</h2>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Digite seu Nome"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite sua senha"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
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
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Confirme sua senha
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Confirme sua senha"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>
                    </form>
                    <div className="mt-6">
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2"
                        >
                            Criar uma Conta
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;