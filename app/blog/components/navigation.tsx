"use client";

import { useRef } from "react";
import { useIsInsideMobileNavigation } from "./mobile-navigation";
import { useSectionStore } from "./section";
import clsx from "clsx";
import { motion, useIsPresent } from "motion/react";
import { Link } from "next-view-transitions";

function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current;
  return condition ? initialValue : value;
}

interface NavGroup {
  title: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}

export function NavLink({
  href,
  children,
  active = false,
  isAnchorLink = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  isAnchorLink?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "flex justify-between gap-2 py-1 pr-3 text-sm transition",
        isAnchorLink ? "pl-7" : "pl-4",
        active ? "text-white" : " text-slate-500 hover:text-slate-800"
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  );
}

export function VisibleSectionHighlight({
  group,
  pathname,
  noHeading,
}: {
  group: NavGroup;
  pathname: string;
  noHeading?: boolean;
}) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  );

  let isPresent = useIsPresent();
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: "_top" }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  );
  let itemHeight = 30;
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight;
  if (noHeading) {
    height -= itemHeight;
  }
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="bg-slate-100 absolute inset-x-0 top-0 will-change-transform"
      style={{ borderRadius: 8, height, top }}
    />
  );
}
