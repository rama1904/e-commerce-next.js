import Image from "next/Image"
import Link from "next/Link"
const Logo = () => {
    return (
        <Link href={"/"}>
            <Image src="/img/Logo.png" alt="Pasion por la camiseta" width={94} height={30} />
        </Link>
    )
}

export default Logo