import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/FacundoAranda'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/facundo-aranda-joaquin/'},
    {icon: <FaWhatsapp />, path: 'https://wa.me/+541122531998?text=Hola%20Facundo.%20Como%20estas?'}
]
const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
                </Link>
        })}
    </div>
}

export default Social