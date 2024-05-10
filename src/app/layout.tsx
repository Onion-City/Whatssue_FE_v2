"use client";
import { HistoryHeader, LogoHeader } from "@/components/organisms/Header";
import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import { usePathname } from "next/navigation";
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

  return (
    <html lang="kr">
      <body>
        {historyHeaderList.includes(pathname) && <HistoryHeader />}
        {logoHeaderList.includes(pathname) && <LogoHeader />}
        {clubHeaderList.includes(pathname) && <ClubHeader />}
        {children}
      </body>
    </html>
  );
}
