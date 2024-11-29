import { IconBrandFacebook } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className=" bg-slate-900  border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8">
          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="text-slate-400 hover:text-slate-100 transition duration-150 ease-in-out"
                href="https://www.facebook.com/Galvaodireitodigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconBrandFacebook stroke={1} size={32} />
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">
            © Advocacia Galvão - OAB/SP 389789
          </div>
        </div>
      </div>
    </footer>
  );
}
