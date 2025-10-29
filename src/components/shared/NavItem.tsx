interface NavItemProps {
    href?: string;
    text: string;
    imagem?: string;
    className?: string;
    imageClass?: string;
}

export const NavItem = ({ href, text, imagem, className ="", imageClass="" }: NavItemProps) => {

    return (
        <li className={`flex flex-row items-center gap-3`}>
            <img src={imagem} className={`${imageClass}`}/>
            <a href={href} className={`duration-300 font-medium ease-linear hover:text-primary py-3 ${className}`}>
                {text}
            </a>
        </li>
    );
};