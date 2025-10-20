import { Titulo } from "../shared/Titulo";

interface CardPilaresProps {
    titulo: string;
    texto: string;
    imagem: string;
}
export const CardPilares = ({titulo, texto, imagem}: CardPilaresProps) => {
    return(
        <div className="flex flex-col m-auto items-center justify-center w-100 bg-white p-6 rounded-2xl shadow-gray-500 shadow-lg">
            <img src={imagem} alt={imagem}/>
            <Titulo>{titulo}</Titulo>
            <p className="text-center">{texto}</p>
        </div>
    )
}