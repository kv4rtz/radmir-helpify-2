"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui";

import { tabs } from "./tabs";

export const HeaderNavigation = () => {
  const pathname = usePathname();
  const selectedTab = tabs.find((tab) => tab.href === pathname);

  return (
    <nav>
      <Tabs defaultValue={selectedTab?.value}>
        <TabsList className={`overflow-x-auto overflow-y-hidden`}>
          {tabs.map((tab, idx) => (
            <Link className="block" key={idx} href={tab.href}>
              <TabsTrigger className="w-full" value={tab.value}>
                {tab.label}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </Tabs>
    </nav>
  );
};
