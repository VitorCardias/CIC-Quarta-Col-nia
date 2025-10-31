import { Titulo } from "../shared/Titulo"
import sobrenos from "../../assets/sobrenos.svg"

export const SobreNos = () => {
    return(
        <section id="sobre-nos" className="flex flex-col lg:flex-row m-auto gap-12 lg:gap-16 px-6 py-16 lg:p-16 bg-white-2 items-center max-w-7xl">
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <Titulo className="text-center lg:text-left">Nascemos para Fortalecer a Nossa Região</Titulo>
                <p className="pt-4 pb-6 text-justify">A CIC Quarta Colônia nasce com o propósito de ser a voz unificada da classe empresarial da nossa região, representando a indústria, o comércio e os serviços. Sua missão é fortalecer o empreendedorismo local, ampliar a representatividade e impulsionar o desenvolvimento econômico e social.</p>
                <p className="text-justify">Inspirada em entidades consolidadas, nosso diferencial é a união das entidades dos nove municípios, a defesa dos interesses comuns e a busca permanente por inovação, qualificação e integração.</p>
            </div>
            <div>
                <img src={sobrenos} alt="imagem sobre nos" className="w-full h-auto rounded-lg shadow-md"/>
            </div>
        </section>
    );
}