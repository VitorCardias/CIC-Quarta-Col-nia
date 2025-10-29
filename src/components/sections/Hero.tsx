import imagemInicial from "../../assets/inicio.svg"
import logo from "../../assets/logos/logo_1.svg"
export const Hero = () => {
    return (
        <section className="relative w-full">
            <img src={imagemInicial} alt="CIC Quarta Colônia" className="w-full"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center 
                pt-20 px-6 pb-6
                sm:pt-40 sm:px-12 sm:pb-12 
                lg:pt-48 lg:px-24 lg:pb-24 
                bg-black/30">
                <img src={logo} alt="Fundação CIC Quarta Colônia" className="w-32 lg:w-80 md:w-64 mb-4 lg:mb-6"/>
                <p className="font-bold text-xl sm:text-4xl lg:text-5xl text-white text-center">
                    Unindo forças pelo futuro da Quarta Colônia.
                </p>
                <p className="font-normal text-white mt-4 text-center max-w-prose text-sm lg:text-lg">A voz unificada da indústria, comércio e serviços, impulsionando o desenvolvimento sustentável da nossa região.</p>
            </div>
        </section>
    );
};