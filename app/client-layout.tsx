"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen text-sm">
        {/* Main content */}
        <main className="max-w-2xl w-full min-h-screen mx-auto px-4 grow">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
