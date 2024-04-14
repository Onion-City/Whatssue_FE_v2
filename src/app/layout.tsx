"use client";
import { HistoryHeader, LogoHeader } from "@/components/organisms/Header";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const logoHeaderList = [
    "/"
  ]

  const historyHeaderList = [
    "/user/onboarding",
    "/user/club"
  ]
  return (
    <html lang="kr">
      <body>
        {historyHeaderList.includes(pathname) && <HistoryHeader />}
        {logoHeaderList.includes(pathname) && <LogoHeader />}
        {children}
      </body>
    </html>
  );
}
