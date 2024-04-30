"use client";
import { Nav } from "@/components/organisms/Nav";
import { usePathname } from "next/navigation";

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // const boardHeaderList = pathname.split("/")[1] === "board";
  const boardNavList = ["/board", "/board/free", "/board/notice"];
  // const headerStyle: React.CSSProperties = {
  //   position: "fixed",
  //   top: 0,
  // };
  const navStyle: React.CSSProperties = {
    position: "fixed",
    bottom: 0,
  };
  return (
    <form style={{ position: "relative" }}>
      {/* {boardHeaderList && (
        <div style={headerStyle}>
          <HistoryHeader />
        </div>
      )} */}
      <div>{children}</div>
      {boardNavList.includes(pathname) && (
        <div style={navStyle}>
          <Nav />
        </div>
      )}
    </form>
  );
}
