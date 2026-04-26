import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteChrome } from "@/components/layout/SiteChrome";
import { getContentRegistry } from "@/lib/content";
import { siteConfig } from "@/site.config";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: "A reusable documentation and product source-of-truth template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const registry = getContentRegistry();

  return (
    <html lang="en">
      <body>
        <SiteChrome
          domains={registry.domainTabs}
          searchIndex={registry.searchIndex}
          config={registry.siteConfig}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
