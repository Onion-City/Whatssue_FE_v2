"use client";
import { HistoryHeader } from "@/components/organisms/Header";

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <form>
      <HistoryHeader />
      {children}
    </form>
  );
}
