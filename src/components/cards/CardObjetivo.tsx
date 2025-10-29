interface CardObjetivoProps {
    texto: string;
    imagem: string;
    strong: string;
}

export const CardObjetivo = ({strong, texto, imagem}: CardObjetivoProps) => {
    return(
        <div className="flex flex-row p-4 w-full max-w-sm md:max-w-none rounded-2xl items-center justify-start gap-4 shadow-lg">
            <img src={imagem} alt={imagem} className="w-20 h-20 flex-shrink-0 md:w-24 md:h-24 lg:w-32 lg:h-32"/>
            <p><strong>{strong}</strong>{texto}</p>
        </div>
    )
}