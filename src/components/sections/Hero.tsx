import imagemInicial from "../../assets/inicio.svg"
import logo_redonda from "../../assets/logos/logo_redonda.svg"
export const Hero = () => {
    return (
        <section className="relative w-full">
            <img src={imagemInicial} alt="CIC Quarta Colônia" className="w-full"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-50">
                <img src={logo_redonda} alt="Fundação CIC Quarta Colônia" className="m-auto mb-0"/>
                <p className="font-bold text-5xl justify-center c-text-white m-auto mb-0">
                    Unindo forças pelo futuro da Quarta Colônia.
                </p>
                <p className="font-normal m-auto justify-center c-text-white mt-4">A voz unificada da indústria, comércio e serviços, impulsionando o desenvolvimento sustentável da nossa região.</p>
            </div>
        </section>
    );
};