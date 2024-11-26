export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-32">
          {/* Items */}
          <div
            className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* Lines decoration */}
            <div
              className="absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden md:flex"
              aria-hidden="true"
            >
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100"></div>
            </div>

            {/* 1st item */}
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter
                    x="-14.6%"
                    y="-11.4%"
                    width="129.2%"
                    height="132%"
                    filterUnits="objectBoundingBox"
                    id="fb6-a"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-29.2%"
                    y="-20.8%"
                    width="158.3%"
                    height="158.3%"
                    filterUnits="objectBoundingBox"
                    id="fb6-d"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feComposite
                      in="shadowBlurOuter1"
                      in2="SourceAlpha"
                      operator="out"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <path
                    d="M41.95 24.051A6.957 6.957 0 0037 22a6.956 6.956 0 00-5 2.102l-.05-.051A6.957 6.957 0 0027 22c-1.87 0-3.627.729-4.95 2.051A6.948 6.948 0 0020 29c0 1.87.728 3.627 2.05 4.949l9.95 9.95 9.95-9.95A6.952 6.952 0 0044 29a6.954 6.954 0 00-2.05-4.949z"
                    id="fb6-b"
                  />
                  <path d="M36 33a6 6 0 100 12 6 6 0 000-12z" id="fb6-e" />
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="fb6-c"
                  >
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <use fill="#000" filter="url(#fb6-a)" xlinkHref="#fb6-b" />
                <use fill="url(#fb6-c)" xlinkHref="#fb6-b" />
                <use fill="#000" filter="url(#fb6-d)" xlinkHref="#fb6-e" />
                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb6-e" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2">
                Atendimento humano
              </h3>
              <p className="text-lg text-slate-500">
                Fale diretamente com nossos especialistas pelo WhatsApp.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
              data-aos-delay="100"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter
                    x="-12.1%"
                    y="-13.2%"
                    width="124.1%"
                    height="136.8%"
                    filterUnits="objectBoundingBox"
                    id="fb2-a"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feComposite
                      in="shadowBlurOuter1"
                      in2="SourceAlpha"
                      operator="out"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-12.1%"
                    y="-13.2%"
                    width="124.1%"
                    height="136.8%"
                    filterUnits="objectBoundingBox"
                    id="fb2-c"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <path
                    d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z"
                    id="fb2-b"
                  />
                  <path
                    d="M46 23H19c-.552 0-1 .424-1 .947v17.106c0 .523.448.947 1 .947h27c.552 0 1-.424 1-.947V23.947c0-.523-.448-.947-1-.947z"
                    id="fb2-d"
                  />
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="fb2-e"
                  >
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g transform="rotate(25 32.5 32.5)">
                  <use fill="#000" filter="url(#fb2-a)" xlinkHref="#fb2-b" />
                  <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb2-b" />
                </g>
                <g>
                  <use fill="#000" filter="url(#fb2-c)" xlinkHref="#fb2-d" />
                  <use fill="url(#fb2-e)" xlinkHref="#fb2-d" />
                </g>
                <path
                  d="M32.5 36a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
                  fillOpacity=".64"
                  fill="#5091EE"
                />
              </svg>
              <h3 className="h4 font-playfair-display mb-2">
                Preços justos e acessíveis
              </h3>
              <p className="text-lg text-slate-500">
                Nós ganhamos com você, não com o seu dinheiro.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
              data-aos-delay="200"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <filter
                    x="-58.3%"
                    y="-17.9%"
                    width="216.7%"
                    height="150%"
                    filterUnits="objectBoundingBox"
                    id="fb3-a"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feComposite
                      in="shadowBlurOuter1"
                      in2="SourceAlpha"
                      operator="out"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <filter
                    x="-19.4%"
                    y="-10.9%"
                    width="138.9%"
                    height="130.4%"
                    filterUnits="objectBoundingBox"
                    id="fb3-c"
                  >
                    <feOffset
                      dy="1"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    />
                    <feGaussianBlur
                      stdDeviation="1"
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.062745098 0 0 0 0 0.11372549 0 0 0 0 0.176470588 0 0 0 0.12 0"
                      in="shadowBlurOuter1"
                    />
                  </filter>
                  <path
                    d="M27 29h-4a1 1 0 00-1 1v12a1 1 0 001 1h5V30a1 1 0 00-1-1z"
                    id="fb3-b"
                  />
                  <path
                    d="M43.882 28.133A2.986 2.986 0 0043 28h-6v-3c0-3.824-2.589-4.942-3.958-5A1 1 0 0032 21v4.638l-4 4.8V43h12.23a2.985 2.985 0 002.87-2.118l2.769-9a3 3 0 00-1.987-3.749z"
                    id="fb3-d"
                  />
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="fb3-e"
                  >
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#E2EEFF" offset="100%" />
                  </linearGradient>
                </defs>
                <rect
                  className="fill-current text-blue-600"
                  width="64"
                  height="64"
                  rx="32"
                />
                <use fill="#000" filter="url(#fb3-a)" xlinkHref="#fb3-b" />
                <use fillOpacity=".64" fill="#E2EEFF" xlinkHref="#fb3-b" />
                <use fill="#000" filter="url(#fb3-c)" xlinkHref="#fb3-d" />
                <use fill="url(#fb3-e)" xlinkHref="#fb3-d" />
              </svg>
              <h3 className="h4 font-playfair-display mb-2">
                Comunicação simples e direta
              </h3>
              <p className="text-lg text-slate-500">
                Sem termos técnicos, de maneira que qualquer um entende.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
