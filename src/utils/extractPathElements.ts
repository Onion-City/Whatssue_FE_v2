import { usePathname } from "next/navigation";

export function formatClubId() {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  return parseInt(pathProps[0], 10);
}

export function formatPostId() {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  return parseInt(pathProps[3], 10);
}

export function formatPostCategory() {
  const pathname = usePathname();
  const pathProps = pathname.split("/").slice(1);
  return pathProps[2];
}
