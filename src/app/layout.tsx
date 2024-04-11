import { LogoHeader } from "@/components/organisms/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whatssue",
  description: "Whatssue",
};
// todo::
// 파라미터 값에 따라 헤더 변경 처리 부탁드릴게용..
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>
        <LogoHeader />
        {children}
      </body>
    </html>
  );
}
