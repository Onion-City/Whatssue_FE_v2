import { usePathname } from "next/navigation";

export function FormatClubId() {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  return parseInt(pathProps[0], 10);
}

export function FormatPostId() {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  return parseInt(pathProps[3], 10);
}

export function FormatPostCategory() {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  return pathProps[2];
}
