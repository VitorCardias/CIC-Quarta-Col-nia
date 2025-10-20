import logo from "../../assets/logos/logo_1.svg"
import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";

const navItems = [
    {href: "#", text: "Inicio"},
    {href: "#sobre-nos", text: "SobreNos"},
    {href: "#atuaçao", text: "Atuação"},
    {href: "#valores", text: "Valores"},
    {href: "#objetivo", text: "Objetivo"},
    {href: "#contato", text: "Contato"},
];

export const Navbar = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6 bg-body">
            <Container>
                <nav className="w-full flex justify-between gap-20 relative">
                    {/* Logo */}
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="CIC Quarta Colônia" className="w-40 h-21"/>
                        </a>
                    </div>
                    {/* Items da Navbar */}
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0
                    bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
                    >
                        <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-20 text-lg
                        w-full lg:justify-center lg:items-center color-title" 
                        >
                            {navItems.map((item, key) => (
                                <NavItem href={item.href} text={item.text} key={key} className="hover:brightness-200"/>
                            ))}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
};