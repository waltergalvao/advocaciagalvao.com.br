import {
  TabGroup,
  TabList,
  Tab as TabListItem,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Link } from "next-view-transitions";
import Image, { type ImageProps } from "next/image";
import { Heading } from "./heading";
import { IconExclamationCircle, IconInfoCircle } from "@tabler/icons-react";

export { Code as code, CodeGroup, Pre as pre } from "./code";

export const a = function A({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & { href: string }) {
  const isExternal = props.href.startsWith("http");

  if (isExternal) {
    return (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {children} ↗
      </a>
    );
  }

  return <Link {...props}>{children}</Link>;
};

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, "level">
) {
  return <Heading level={2} {...props} />;
};

export const h3 = function H3(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, "level">
) {
  return <Heading level={3} {...props} />;
};

type ImagePropsWithOptionalAlt = Omit<ImageProps, "alt"> & { alt?: string };

export const img = function Img(props: ImagePropsWithOptionalAlt) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-900 [&+*]:mt-8">
      <Image
        alt=""
        sizes="(min-width: 1280px) 56rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
        {...props}
      />
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
    </div>
  );
};

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center gap-2.5 rounded p-4 border border-sky-500/30 bg-sky-500/5 text-sky-200 ">
      <IconInfoCircle className="text-sky-400" size={20} stroke={1.5} />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex items-center gap-2.5 rounded p-4 border border-red-400/30 bg-red-400/5 text-red-200 ">
      <IconExclamationCircle className="text-red-400" size={20} stroke={1.5} />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}

export function Tabs({
  children,
  tabs,
}: {
  children: React.ReactNode;
  tabs: string[];
}) {
  return (
    <TabGroup>
      <TabList className="flex border-b-2 border-dark-400">
        {tabs.map((tab) => (
          <TabListItem
            key={tab}
            className={`px-3 py-2 text-sm/6 font-semibold focus:outline-none text-zinc-200 data-[hover]:bg-dark-600 data-[selected]:border-b-2 data-[selected]:border-green-400 data-[selected]:translate-y-[2px]`}
          >
            {tab}
          </TabListItem>
        ))}
      </TabList>
      <TabPanels>{children}</TabPanels>
    </TabGroup>
  );
}
export const Tab = TabPanel;
