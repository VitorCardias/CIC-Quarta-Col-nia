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
        <section className="flex flex-col m-auto items-center justify-center black-green w-full p-30 gap-5">
            <p className="font-bold c-text-white text-3xl">O que nos Move</p>
            <p className="c-text-white">Nossa essência está em unir, fortalecer e desenvolver nossa região de forma sustentável e inovadora.</p>
            <div className="flex flex-row m-auto gap-20 mt-20">
                <div className="flex flex-col w-lg">
                    <p className="font-bold c-text-white text-3xl">Nossa Missão</p>
                    <div className="white-green h-1 rounded-full"></div>
                    <p className="w-full c-text-white text-justify mt-5">Unir e fortalecer as entidades empresariais da Quarta Colônia, promovendo o desenvolvimento sustentável da indústria, comércio, serviços, turismo e agricultura, com inovação, integração e representatividade.</p>
                </div>
                <div className="flex flex-col w-lg">
                    <p className="font-bold c-text-white text-3xl">Nossos Valores</p>
                    <div className="white-green h-1 rounded-full"></div>
                    <ul className="mt-5">
                        {navItems.map((item, key) => (
                            <NavItem imagem={certo} text={item.text} key={key} className="c-text-white"/>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}