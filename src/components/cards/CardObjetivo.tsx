interface CardObjetivoProps {
    texto: string;
    imagem: string;
    strong: string;
}

export const CardObjetivo = ({strong, texto, imagem}: CardObjetivoProps) => {
    return(
        <div className="flex flex-row p-4 w-sm rounded-2xl items-center justify-center gap-5 shadow-gray-500 shadow-lg ">
            <img src={imagem} alt={imagem}/>
            <p><strong>{strong}</strong>{texto}</p>
        </div>
    )
}