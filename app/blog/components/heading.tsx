"use client";

import { useEffect, useRef } from "react";
import { useSectionStore } from "./section";
import { remToPx } from "@/app/blog/lib/remToPx";
import { useInView } from "motion/react";
import { Link } from "next-view-transitions";
import { IconAnchor } from "@tabler/icons-react";

function Anchor({
  id,
  inView,
  children,
}: {
  id: string;
  inView: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`#${id}`}
      className="group text-inherit no-underline hover:text-inherit"
    >
      {inView && (
        <div className="absolute -ml-[28px] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
          <div className="group/anchor block rounded-lg transition">
            <IconAnchor className="transition text-dark-100" size={20} />
          </div>
        </div>
      )}
      {children}
    </Link>
  );
}

export function Heading<Level extends 2 | 3>({
  children,
  level,
  ...props
}: React.ComponentPropsWithoutRef<`h${Level}`> & {
  id: string;
  level?: Level;
}) {
  level = level ?? (2 as Level);
  let Component = `h${level}` as "h2" | "h3";
  let ref = useRef<HTMLHeadingElement>(null);
  let registerHeading = useSectionStore((s) => s.registerHeading);

  let inView = useInView(ref, {
    margin: `${remToPx(-3.5)}px 0px 0px 0px`,
    amount: "all",
  });

  useEffect(() => {
    registerHeading({
      id: props.id,
      ref,
      offsetRem: 6,
    });
  }, []);

  return (
    <>
      <Component ref={ref} className={"scroll-mt-24"} {...props}>
        <Anchor id={props.id} inView={inView}>
          {children}
        </Anchor>
      </Component>
    </>
  );
}
