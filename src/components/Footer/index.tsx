import { FaFacebookF, FaInstagram, FaTwitter, FaTree } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-b border-gray-700 pb-10">

                    {/* Logo & Social */}
                    <div className="col-span-2 md:col-span-2 space-y-4">
                        <div className="text-3xl font-extrabold text-christmas-green flex items-center space-x-2">
                            <FaTree className="text-christmas-red" />
                            <span className="text-white">HoHoList</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Simplificando o Natal, um presente de cada vez.
                        </p>

                        <div className="flex space-x-4 text-xl">
                            <a href="#" className="text-gray-400 hover:text-christmas-red transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-christmas-red transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-christmas-red transition">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Links Empresa */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-4">Empresa</h4>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Sobre</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Blog Natalino</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Carreiras</a>
                    </div>

                    {/* Links Suporte */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-4">Suporte</h4>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Como funciona</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Contato</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition">FAQ</a>
                    </div>

                    {/* Legal */}
                    <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Política de Privacidade</a>
                        <a href="#" className="block text-gray-400 hover:text-white transition">Termos de Serviço</a>
                    </div>

                </div>

                {/* Rodapé final */}
                <div className="mt-8 text-center md:flex md:justify-between md:items-center">
                    <p className="text-gray-500 text-sm">
                        © 2024 HoHoList. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
