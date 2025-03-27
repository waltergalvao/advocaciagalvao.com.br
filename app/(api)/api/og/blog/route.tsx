import { ImageResponse } from "next/og";

import { blogParams, getFont } from "../utils";

export const runtime = "edge";

export const GET = async (req: Request) => {
  const poppins = await getFont({
    family: "Poppins",
    weights: [400, 700, 900],
  });

  const parsed = blogParams.decodeRequest(req);

  if (!parsed.success) {
    return new Response(parsed.error.toString(), { status: 400 });
  }

  const props = parsed.data.input;

  return new ImageResponse(
    (
      <div tw="bg-slate-800 h-full w-full flex flex-col p-14">
        <div tw="flex flex-col w-full h-full">
          <h1 tw="text-5xl mt-20 mb-0 text-white">{props.title}</h1>
          <div tw="flex mt-auto">
            {props.authors.map((author) => (
              <div tw="mt-4 flex h-16" key={JSON.stringify(author)}>
                <img src={author.src} tw="mr-4 mt-3 h-16 w-16 rounded-full" />
                {props.authors.length < 2 && (
                  <div tw="flex flex-col items-stretch m-0">
                    <p tw="text-base text-slate-500">{author.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        { name: "Poppins", data: poppins[900], weight: 900 },
        { name: "Poppins", data: poppins[700], weight: 700 },
        { name: "Poppins", data: poppins[400], weight: 400 },
      ],
    }
  );
};
