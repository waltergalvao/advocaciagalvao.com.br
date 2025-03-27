import Link from "next/link";
import LogoImg from "./logo-galvao.png";
import Image from "next/image";

export default function Logo() {
  return <Image src={LogoImg} alt="Galvao Advocacia" height={60} width={60} />;
}
