import Image from "next/image";
import Avatar1 from "./assets/review-1.png";
import Avatar2 from "./assets/review-2.png";
import Avatar3 from "./assets/review-3.png";
import Avatar4 from "./assets/review-4.png";
import { IconStarFilled } from "@tabler/icons-react";

interface AvaliacoesProps {
  variant?: "dark" | "light";
}

export const Avaliacoes = ({ variant = "dark" }: AvaliacoesProps) => {
  return (
    <a
      className="mt-8 block group cursor-pointer p-2 rounded-lg inline-flex items-center gap-4"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.google.com/search?q=Galv%C3%A3o+Advocacia+e+Consultoria+Jur%C3%ADdica&stick=H4sIAAAAAAAA_-NgU1I1qLA0SUpLMTe2SDEzNUo0NDS0MqiwSEpLSkwzNTEyTzOwNDM1XMSq6Z6YU3Z4cb6CY0pZfnJicmaiQqqCc35ecWlOSX4RkOdVWnR4bUpmciIAWwYWSFUAAAA&hl=en-GB&mat=CRDnb4ZILEd0ElcBmzl_pRgMRQPtZXvXnX45VefW168TgwL3RVqkDGHf2NJuF3DgyCsRy48U-MtIwAM-Xr3qctjJid3oJMkpOELDlZPt-rvnqHYfzRD2xXyojCXDyUgNYpo&authuser=0&ved=2ahUKEwjkr6CNiuCLAxU7qZUCHaGqO2MQ-MgIegQIJhAe&sei=JGC-Z-CUJ82J1sQP3ZS6CQ#lrd=0x94bfd738d652a111:0x8bfbaf5427f09651,1,,,,"
    >
      <div className="flex items-center gap-2 relative w-[130px]">
        <Image
          src={Avatar1}
          width={40}
          height={40}
          className="border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
          alt="Google Review Avatar"
        />
        <Image
          src={Avatar2}
          width={40}
          height={40}
          className="absolute left-[30px] border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
          alt="Google Review Avatar"
        />
        <Image
          src={Avatar3}
          width={40}
          height={40}
          className="absolute left-[60px] border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
          alt="Google Review Avatar"
        />
        <Image
          src={Avatar4}
          width={40}
          height={40}
          className="absolute left-[90px] border-2 border-slate-700 group-hover:border-amber-500 rounded-full"
          alt="Google Review Avatar"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 h-[20px]">
          {[...Array(5)].map((_, index) => (
            <IconStarFilled
              key={index}
              size={20}
              stroke={1.5}
              className="text-amber-500"
            />
          ))}
          <h3 className="text-amber-500 text-2xl font-bold">5.0</h3>
        </div>
        <span
          className={`text-${
            variant === "dark" ? "slate-300" : "slate-800"
          } text-xs`}
        >
          Leia as avaliações de clientes
        </span>
      </div>
    </a>
  );
};
