"use client";
import { HistoryHeader, LogoHeader } from "@/components/organisms/Header";
import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const logoHeaderList = [
    "/",
  ];

  const historyHeaderList = [
    "/user/onboarding",
    "/user/club"
  ];

  const clubHeaderList = [
    "/info",
    "/board",
    "/board/notice",
    "/board/free",
    "/member/list",
    "/member/attendance/list",
  ];

  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 1,
      }
    }
  }));

  return (
    <html lang="kr">
      <body>
        <QueryClientProvider client={queryClient}>
          {historyHeaderList.includes(pathname) && <HistoryHeader />}
          {logoHeaderList.includes(pathname) && <LogoHeader />}
          {clubHeaderList.includes(pathname) && <ClubHeader />}
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
