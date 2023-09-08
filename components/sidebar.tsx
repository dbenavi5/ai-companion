"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";

interface SidebarProps {
  isPro: boolean;
}

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const onNavigate = (url: string, pro: boolean) => {
    // TODO: check for pro

    return router.push(url);
  };

  const links = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      pro: false,
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Create",
      pro: true,
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
      pro: true,
    },
  ];
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex-1 flex  justify-center">
        <div className="space-y-2">
          {links.map((link) => (
            <div
              onClick={() => onNavigate(link.href, link.pro)}
              key={link.href}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === link.href && "bg-primary/10 text-primary"
              )}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <link.icon className="h-5 w-5" />
                {link.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
