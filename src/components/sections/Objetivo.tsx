import { CardObjetivo } from "../cards/CardObjetivo"
import { Titulo } from "../shared/Titulo"
import imagem1 from "../../assets/cardFotos/topico01.svg"
import imagem2 from "../../assets/cardFotos/topico02.svg"
import imagem3 from "../../assets/cardFotos/topico03.svg"
import imagem4 from "../../assets/cardFotos/topico04.svg"
import imagem5 from "../../assets/cardFotos/topico05.svg"
import imagem6 from "../../assets/cardFotos/topico06.svg"
import imagem7 from "../../assets/cardFotos/topico07.svg"

export const Objetivo = () => {
    return(
        <section id="objetivo" className="flex flex-col m-auto items-center justify-center w-full py-16 lg:py-24">
            <Titulo className="mb-4 text-center px-4">Nossos Objetivos para a Região</Titulo>
            <p className="max-w-2xl text-center mb-12 lg:mb-16 px-6">Temos um plano de ação claro e focado em resultados tangíveis para o desenvolvimento econômico e social.</p>
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <CardObjetivo imagem={imagem1} strong="Fortalecer a união empresarial" texto=" entre as entidades dos nove municípios."/>
                <CardObjetivo imagem={imagem2} strong="Promover parcerias estratégicas" texto=" com órgãos públicos e privados."/>
                <CardObjetivo imagem={imagem3} strong="Apoiar a inovação e o empreendedorismo," texto=" criando condições para novos negócios."/>
                <CardObjetivo imagem={imagem4} strong="Estimular o turismo e a cultura regional" texto=" como motores de desenvolvimento."/>
                <CardObjetivo imagem={imagem5} strong="Defender os interesses do setor empresarial," texto=" acompanhando legislações e propondo soluções."/>
                <CardObjetivo imagem={imagem6} strong="Investir em educação e qualificação," texto=" preparando pessoas para o mercado de trabalho."/>
                <CardObjetivo imagem={imagem7} strong="Captar recursos e projetos" texto=" que impulsionem o crescimento econômico e social da região."/>
            </div>
        </section>
    )
}