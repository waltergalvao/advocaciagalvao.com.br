"use client";

import {
  Children,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { IconClipboard } from "@tabler/icons-react";
import clsx from "clsx";
import { create } from "zustand";

const languageNames: Record<string, string> = {
  js: "JavaScript",
  jsx: "JavaScript",
  ts: "TypeScript",
  tsx: "TypeScript",
  javascript: "JavaScript",
  typescript: "TypeScript",
  astro: "Astro",
  vue: "Vue",
  svelte: "Svelte",
};

function getPanelTitle({
  title,
  language,
}: {
  title?: string;
  language?: string;
}) {
  if (title) {
    return title;
  }
  if (language && language in languageNames) {
    return languageNames[language];
  }
  return "Code";
}

function CopyButton({ code }: { code: string }) {
  let [copyCount, setCopyCount] = useState(0);
  let copied = copyCount > 0;

  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copyCount]);

  return (
    <button
      type="button"
      className={clsx(
        "group/button text-2xs absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100",
        copied
          ? "bg-green-400/10 ring-1 ring-inset ring-green-400/20"
          : "bg-white/2.5 hover:bg-white/5"
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1);
        });
      }}
    >
      <span
        aria-hidden={copied}
        className={clsx(
          "pointer-events-none flex items-center gap-1 transition duration-300 text-zinc-400",
          copied && "-translate-y-1.5 opacity-0"
        )}
      >
        <IconClipboard className="size-4 fill-zinc-500/20 stroke-zinc-500 transition-colors" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          "pointer-events-none absolute inset-0 flex items-center justify-center text-green-400 transition duration-300",
          !copied && "translate-y-1.5 opacity-0"
        )}
      >
        Copied!
      </span>
    </button>
  );
}

function CodePanelHeader({ label }: { label?: string }) {
  if (!label) {
    return null;
  }

  return (
    <div className="bg-white/1 flex h-9 items-center gap-2 border-y border-t-transparent px-4 bg-zinc-900">
      {label && (
        <span className="font-mono text-xs text-zinc-400">{label}</span>
      )}
    </div>
  );
}

function CodePanel({
  children,
  label,
  code,
}: {
  children: React.ReactNode;
  label?: string;
  code?: string;
}) {
  let child = Children.only(children);

  if (isValidElement(child)) {
    label = child.props.label ?? label;
    code = child.props.code ?? code;
  }

  if (!code) {
    throw new Error(
      "`CodePanel` requires a `code` prop, or a child with a `code` prop."
    );
  }

  return (
    <div className="bg-white/2.5 group">
      <CodePanelHeader label={label} />
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
        <CopyButton code={code} />
      </div>
    </div>
  );
}

function CodeGroupHeader({
  title,
  children,
  selectedIndex,
}: {
  title: string;
  children: React.ReactNode;
  selectedIndex: number;
}) {
  let hasTabs = Children.count(children) > 1;

  if (!title && !hasTabs) {
    return null;
  }

  return (
    <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b px-4 border-zinc-800 bg-zinc-800">
      {title && (
        <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
          {title}
        </h3>
      )}
      {hasTabs && (
        <TabList className="-mb-px flex gap-4 text-xs font-medium">
          {Children.map(children, (child, childIndex) => (
            <Tab
              className={clsx(
                "outline-none border-b-2 py-3 transition",
                childIndex === selectedIndex
                  ? "border-green-400 text-green-400"
                  : "border-transparent text-zinc-400 hover:text-zinc-300"
              )}
            >
              {getPanelTitle(isValidElement(child) ? child.props : {})}
            </Tab>
          ))}
        </TabList>
      )}
    </div>
  );
}

function CodeGroupPanels({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodePanel>) {
  let hasTabs = Children.count(children) > 1;

  if (hasTabs) {
    return (
      <TabPanels>
        {Children.map(children, (child) => (
          <TabPanel>
            <CodePanel {...props}>{child}</CodePanel>
          </TabPanel>
        ))}
      </TabPanels>
    );
  }

  return <CodePanel {...props}>{children}</CodePanel>;
}

function usePreventLayoutShift() {
  let positionRef = useRef<HTMLElement>(null);
  let rafRef = useRef<number>();

  useEffect(() => {
    return () => {
      if (typeof rafRef.current !== "undefined") {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return {
    positionRef,
    preventLayoutShift(callback: () => void) {
      if (!positionRef.current) {
        return;
      }

      let initialTop = positionRef.current.getBoundingClientRect().top;

      callback();

      rafRef.current = window.requestAnimationFrame(() => {
        let newTop =
          positionRef.current?.getBoundingClientRect().top ?? initialTop;
        window.scrollBy(0, newTop - initialTop);
      });
    },
  };
}

const usePreferredLanguageStore = create<{
  preferredLanguages: Array<string>;
  addPreferredLanguage: (language: string) => void;
}>()((set) => ({
  preferredLanguages: [],
  addPreferredLanguage: (language) =>
    set((state) => ({
      preferredLanguages: [
        ...state.preferredLanguages.filter(
          (preferredLanguage) => preferredLanguage !== language
        ),
        language,
      ],
    })),
}));

function useTabGroupProps(availableLanguages: Array<string>) {
  let { preferredLanguages, addPreferredLanguage } =
    usePreferredLanguageStore();
  let [selectedIndex, setSelectedIndex] = useState(0);
  let activeLanguage = [...availableLanguages].sort(
    (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
  )[0];
  let languageIndex = availableLanguages.indexOf(activeLanguage);
  let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
  if (newSelectedIndex !== selectedIndex) {
    setSelectedIndex(newSelectedIndex);
  }

  let { positionRef, preventLayoutShift } = usePreventLayoutShift();

  return {
    as: "div" as const,
    ref: positionRef,
    selectedIndex,
    onChange: (newSelectedIndex: number) => {
      preventLayoutShift(() =>
        addPreferredLanguage(availableLanguages[newSelectedIndex])
      );
    },
  };
}

const CodeGroupContext = createContext(false);

export function CodeGroup({
  children,
  title,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodeGroupPanels> & { title: string }) {
  let languages =
    Children.map(children, (child) =>
      getPanelTitle(isValidElement(child) ? child.props : {})
    ) ?? [];
  let tabGroupProps = useTabGroupProps(languages);
  let hasTabs = Children.count(children) > 1;

  let containerClassName =
    "my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md ring-1 ring-white/10";
  let header = (
    <CodeGroupHeader title={title} selectedIndex={tabGroupProps.selectedIndex}>
      {children}
    </CodeGroupHeader>
  );
  let panels = <CodeGroupPanels {...props}>{children}</CodeGroupPanels>;

  return (
    <CodeGroupContext.Provider value={true}>
      {hasTabs ? (
        <TabGroup {...tabGroupProps} className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </TabGroup>
      ) : (
        <div className={containerClassName}>
          <div className="not-prose">
            {header}
            {panels}
          </div>
        </div>
      )}
    </CodeGroupContext.Provider>
  );
}

export function Code({
  children,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  let isGrouped = useContext(CodeGroupContext);

  if (isGrouped) {
    if (typeof children !== "string") {
      throw new Error(
        "`Code` children must be a string when nested inside a `CodeGroup`."
      );
    }
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <code {...props}>{children}</code>;
}

export function Pre({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof CodeGroup>) {
  let isGrouped = useContext(CodeGroupContext);

  if (isGrouped) {
    return children;
  }

  return <CodeGroup {...props}>{children}</CodeGroup>;
}
