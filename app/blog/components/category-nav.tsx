"use client";

import { IconBoxMultiple } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { categoriesInfo, Category } from "../lib/categories";

export const CategoryNav = ({
  categories,
  selectedCategory,
}: {
  categories: string[];
  selectedCategory?: string;
}) => {
  return (
    <div className="bg-dark-800 p-1 flex w-fit mx-auto text-dark-100 gap-3 border border-dark-400 rounded-md flex-wrap justify-center">
      <CategoryNavItem
        category=""
        active={!selectedCategory}
        icon={IconBoxMultiple}
      >
        All
      </CategoryNavItem>

      {categories.map((category) => {
        const categoryInfo = categoriesInfo[category as Category];

        if (!categoryInfo) return;

        return (
          <CategoryNavItem
            key={category}
            category={category}
            active={selectedCategory === category}
            icon={categoryInfo.icon}
          >
            {categoryInfo.label}
          </CategoryNavItem>
        );
      })}
    </div>
  );
};

interface CategoryNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
  icon: React.ComponentType<{
    stroke: number;
    size: number;
  }>;
  category: string;
}

const CategoryNavItem = ({
  children,
  icon: Icon,
  active,
  category,
  ...props
}: CategoryNavItemProps) => {
  return (
    <Link
      href={category ? `/blog/category/${category}` : "/blog"}
      scroll={false}
    >
      <div
        {...props}
        className={`font-medium hover:text-green-400 transition-all py-2 px-4 rounded-md cursor-pointer ${
          active ? "bg-green-400/10 text-green-400 " : "hover:scale-105 "
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <Icon size={20} stroke={1.5} />
          {children}
        </div>
      </div>
    </Link>
  );
};
