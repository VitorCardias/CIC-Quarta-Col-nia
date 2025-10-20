import logo from "../../assets/logos/logo_2.svg"
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
            <div className="flex flex-col black-green items-center justify-center pb-6">
                <div className="w-full black-green mx-auto flex flex-row justify-center gap-50 p-20">
                    <div className="min-w-max inline-flex relative">
                        <a className="relative flex items-center gap-3">
                            <img src={logo} alt="Associação Moradores Recanto Maestro" className="w-80 h-47"/>
                        </a>
                    </div>
                    <div>
                        <p className="font-bold c-text-white pr-40 pb-2 text-2xl">Mapa do Site</p>
                        <div className="white-green h-1 rounded-full"></div>
                        <ul className="c-text-white">
                            {navItems.map((item, key) => (
                                <NavItem href={item.href} text={item.text} key={key} className="p-0 m-0"/>
                            ))}
                        </ul>

                    </div>
                    <div>
                        <p className="font-bold c-text-white pr-40 pb-2 text-2xl">Fale Conosco</p>
                        <div className="white-green h-1 rounded-full"></div>
                        <ul>
                            <NavItem imagem={email} text="contato@cicquartacolonia.com.br" className="c-text-white" imageClass="w-6 h-6"/>
                            <NavItem imagem={telefone} text="(55) 99999-9999" className="c-text-white" imageClass="w-6 h-6"/>
                            <NavItem imagem={facebook} text="Facebook" className="c-text-white" imageClass="w-6 h-6"/>
                            <NavItem imagem={instagram} text="Instagram" className="c-text-white" imageClass="w-6 h-6"/>
                        </ul>
                    </div>
                </div>
                <p className="text-gray-400">©2025 CIC Quarta Colônia. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};