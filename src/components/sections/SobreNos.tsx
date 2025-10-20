import { Titulo } from "../shared/Titulo"
import sobrenos from "../../assets/sobrenos.svg"

export const SobreNos = () => {
    return(
        <div className="flex flex-row m-auto gap-10 p-10 pb-20 bg-white-2">
            <div className="w-150 items-center m-auto">
                <Titulo>Nascemos para Fortalecer a Nossa Região</Titulo>
                <p className="pt-4 pb-6 text-justify">A CIC Quarta Colônia nasce com o propósito de ser a voz unificada da classe empresarial da nossa região, representando a indústria, o comércio e os serviços. Sua missão é fortalecer o empreendedorismo local, ampliar a representatividade e impulsionar o desenvolvimento econômico e social.</p>
                <p className="text-justify">Inspirada em entidades consolidadas, nosso diferencial é a união das entidades dos nove municípios, a defesa dos interesses comuns e a busca permanente por inovação, qualificação e integração.</p>
            </div>
            <div>
                <img src={sobrenos} alt="imagem sobre nos"/>
            </div>
        </div>
    );
}