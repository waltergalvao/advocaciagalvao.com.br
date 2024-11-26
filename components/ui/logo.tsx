import Link from "next/link";
import LogoImg from "./logo-galvao.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="block text-blue-600 transition duration-150 ease-in-out"
      aria-label="Galvao Advocacia"
    >
      <Image src={LogoImg} alt="Galvao Advocacia" height={60} width={60} />
    </Link>
  );
}
