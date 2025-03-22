import Image from "next/image";
import { StaticImageData } from "next/image";

interface QuoteProps {
  imageSrc: StaticImageData;
  name: string;
  role: string;
  children: React.ReactNode;
}

export const Quote = ({ imageSrc, name, role, children }: QuoteProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 border border-slate-300 py-4">
      <div className="flex flex-col md:flex-row items-center gap-x-16 gap-y-4">
        <div className="flex text-center min-w-[128px] items-center justify-center flex-col">
          <Image
            src={imageSrc}
            alt="User Avatar"
            className="w-[96px] h-[96px] rounded-full mx-auto md:mx-0"
            width={128}
            height={128}
          />
          <h3 className="text-lg font-bold text-slate-800 mt-1 whitespace-nowrap">
            {name}
          </h3>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
        <div>
          <p className="text-xl text-slate-800">{children}</p>
        </div>
      </div>
    </div>
  );
};
