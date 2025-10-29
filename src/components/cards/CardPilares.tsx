import { Titulo } from "../shared/Titulo";

interface CardPilaresProps {
    titulo: string;
    texto: string;
    imagem: string;
}
export const CardPilares = ({titulo, texto, imagem}: CardPilaresProps) => {
    return(
        <div className="flex flex-col p-4 w-full max-w-sm md:max-w-none rounded-2xl items-center justify-start gap-4 shadow-lg">
            <img src={imagem} alt={imagem} className="w-12 h-12 flex-shrink-0"/>
            <Titulo>{titulo}</Titulo>
            <p className="text-center">{texto}</p>
        </div>
    )
}