import logo from "../../assets/logos/logo_1.svg"
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { useState, useEffect } from "react";

const navItems = [
    {href: "#", text: "Inicio"},
    {href: "#sobre-nos", text: "SobreNos"},
    {href: "#atuaçao", text: "Atuação"},
    {href: "#valores", text: "Valores"},
    {href: "#objetivo", text: "Objetivo"},
    {href: "#contato", text: "Contato"},
];

export const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Se o usuário rolou mais de 50px, muda o estado
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Adiciona o evento quando o componente "monta"
        window.addEventListener('scroll', handleScroll);
        // Remove o evento quando o componente "desmonta" (importante!)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`
            fixed inset-x-0 top-0 z-50
            transition-all duration-300
            ${isScrolled ? 'py-4 bg-body shadow-lg' : 'py-6 bg-transparent'}
        `}>
            <Container>
                <nav className="w-full flex justify-between items-center gap-6 lg:gap-20 relative">
                    {/* Logo */}
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="CIC Quarta Colônia" className="w-32 lg:w-40 h-auto"/>
                        </a>
                    </div>

                    {/* 3. Botão Hamburger (só aparece no mobile) */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Inverte o estado
                        className="lg:hidden p-2 rounded-md text-gray-700"
                        aria-label="Toggle menu"
                    >
                        {/* Mostra 'X' se o menu está aberto, 'Hamburger' se está fechado */}
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>

                    {/* Items da Navbar */}
                    <div className={`
                        flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                        absolute top-full left-0 lg:static lg:top-0

                        lg:bg-transparent
                        shadow-lg lg:shadow-none

                        border-x-box-border lg:border-x-0 lg:h-auto 
                        transition-all duration-300 ease-in-out
                        ${isMenuOpen ? 'h-auto border-x border-b bg-body ' : 'h-0 overflow-hidden lg:overflow-visible'}
                    `}>
                        <ul className={`
                            border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 pb-6 lg:pt-0 lg:pb-0 
                            flex flex-col lg:flex-row gap-y-4 gap-x-20 text-lg
                            w-full lg:justify-center lg:items-center
                            text-gray-800 ${!isScrolled && 'lg:text-white'}
                        `}>
                            {navItems.map((item, key) => (
                                <NavItem href={item.href} text={item.text} key={key} className={`hover:brightness-200`} listClass={``}/>
                            ))}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
};