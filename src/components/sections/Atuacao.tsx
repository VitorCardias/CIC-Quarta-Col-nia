import { CardPilares } from "../cards/CardPilares"
import { Titulo } from "../shared/Titulo"
import representatividade from "../../assets/icons/representatividade.svg"
import integracao from "../../assets/icons/integracao.svg"
import desenvolvimento from "../../assets/icons/desenvolvimento.svg"

export const Pilares = () => {
    return(
        <section className="flex flex-col m-auto bg-white w-full justify-center items-center gap-40">
            <Titulo className="pt-40">Nossa Atuação em 3 Pilares Fundamentais</Titulo>
            <div className="flex flex-row m-auto gap-10">
                <CardPilares 
                    titulo="Representatividade" 
                    texto="Garantir voz ativa para os empresários da Quarta Colônia em todas as instâncias de decisão." 
                    imagem={representatividade}
                /> 
                <CardPilares 
                    titulo="Representatividade" 
                    texto="Promover o relacionamento entre setores e municípios, gerando parcerias e cooperação." 
                    imagem={integracao}
                /> 
                <CardPilares 
                    titulo="Representatividade" 
                    texto="Fomentar projetos e ações que impulsionem a economia e melhorem o ambiente de negócios." 
                    imagem={desenvolvimento}
                /> 
            </div>
        </section>
    )
}