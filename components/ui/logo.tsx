import LogoImg from "./logo-v2.png";
import Image from "next/image";

export default function Logo() {
  return <Image src={LogoImg} alt="Galvão Advocacia" height={80} width={80} />;
}
