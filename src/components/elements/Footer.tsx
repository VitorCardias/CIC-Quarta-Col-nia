import logo from "../../assets/logos/logo_1.svg"
import { NavItem } from "../shared/NavItem";
import email from "../../assets/icons/e-mail.png"
import telefone from "../../assets/icons/telefone.png"
import facebook from "../../assets/icons/facebook.png"
import instagram from "../../assets/icons/instagram.png"

const navItems = [
    {href: "#", text: "Inicio"},
    {href: "#sobre-nos", text: "SobreNos"},
    {href: "#atuaçao", text: "Atuação"},
    {href: "#valores", text: "Valores"},
    {href: "#objetivo", text: "Objetivo"},
    {href: "#contato", text: "Contato"},
];

export const Footer = () => {
    return (
        <footer className="z-50 bottom-0 w-full">
            <div className="flex flex-col black-green items-center justify-center py-8 lg:py-6">
                <div className="w-full black-green mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-24 px-6 py-8 lg:py-16 max-w-7xl">
                    <div className="min-w-max inline-flex relative">
                        <a className="relative flex items-center gap-3">
                            <img src={logo} alt="CIC Quarta Colônia" className="w-64 lg:w-80 h-auto"/>
                        </a>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="font-bold c-text-white pb-2 text-2xl">Mapa do Site</p>
                        <div className="white-green h-1 rounded-full w-24 lg:w-80"></div>
                        <ul className="c-text-white flex flex-col items-center lg:items-start gap-1 mt-4">
                            {navItems.map((item, key) => (
                                <NavItem href={item.href} text={item.text} key={key} className="p-0 m-0"/>
                            ))}
                        </ul>

                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="font-bold c-text-white pb-2 text-2xl">Fale Conosco</p>
                        <div className="white-green h-1 rounded-full w-24 lg:w-80"></div>
                        <ul className="flex flex-col items-center lg:items-start gap-2 mt-4">
                            <NavItem imagem={email} text="contatocicquartacolonia@gmail.com" className="c-text-white" imageClass="w-6 h-6"/>
                            <NavItem imagem={telefone} text="(55) 99999-9999" className="c-text-white" imageClass="w-6 h-6"/>
                            <NavItem imagem={facebook} text="Facebook" className="c-text-white" imageClass="w-6 h-6"/>
                            <NavItem imagem={instagram} text="Instagram" className="c-text-white" imageClass="w-6 h-6"/>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-400 text-center px-6 text-sm">©2025 CIC Quarta Colônia. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};