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
  ]

  const historyHeaderList = [
    "/user/onboarding",
    "/user/club"
  ]

  const clubHeaderList = [
    getClubHeaderList(pathname),
  ]

  // 현재 경로에서 클럽 아이디 추출
  function getClubHeaderList(pathname: string): string {
    const clubId = pathname.split("/")[1];
    return clubId ? `/${clubId}` : "";
  }
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
