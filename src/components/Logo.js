import Image from "next/image";

const Logo = ({size}) => {
return (
        <Image alt='logo' src="/WorthyAppLogo.png" height={size} width={size}/>
)
}

export default Logo;