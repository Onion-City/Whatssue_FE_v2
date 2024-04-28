"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <form>
      <HistoryHeader />
      {children}
      <Nav/>
    </form>
  );
}
