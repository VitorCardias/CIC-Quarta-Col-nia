import { NavItem } from "../shared/NavItem";
import certo from "../../assets/icons/certo.svg"

const navItems = [
    {text: "Cooperação e Integração"},
    {text: "Ética e Transparência"},
    {text: "Inovação e Competitividade"},
    {text: "Sustentabilidade e Identidade Regional"},
];

export const Valores = () => {
    return (
        <section id="valores" className="flex flex-col m-auto items-center justify-center black-green w-full px-6 py-16 lg:py-24 gap-4">
            <p className="font-bold c-text-white text-2xl lg:text-3xl text-center">O que nos Move</p>
            <p className="c-text-white text-center max-w-prose">Nossa essência está em unir, fortalecer e desenvolver nossa região de forma sustentável e inovadora.</p>
            <div className="flex flex-col lg:flex-row w-full max-w-6xl justify-center gap-12 lg:gap-16 mt-12 lg:mt-16">
                <div className="flex flex-col w-full lg:w-1/2">
                    <p className="font-bold c-text-white text-2xl lg:text-3xl text-center lg:text-left">Nossa Missão</p>
                    <div className="white-green h-1 rounded-full my-2 w-24 mx-auto lg:mx-0 lg:w-lg"></div>
                    <p className="w-full c-text-white text-center lg:text-left mt-4">Unir e fortalecer as entidades empresariais da Quarta Colônia, promovendo o desenvolvimento sustentável da indústria, comércio, serviços, turismo e agricultura, com inovação, integração e representatividade.</p>
                </div>
                <div className="flex flex-col w-full lg:w-1/2">
                    <p className="font-bold c-text-white text-2xl lg:text-3xl text-center lg:text-left">Nossos Valores</p>
                    <div className="white-green h-1 rounded-full my-2 w-24 mx-auto lg:mx-0 lg:w-lg"></div>
                    <ul className="mt-4 flex flex-col gap-2 items-center lg:items-start">
                        {navItems.map((item, key) => (
                            <NavItem imagem={certo} text={item.text} key={key} className="c-text-white"/>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}