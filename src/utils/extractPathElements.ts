import { RootState } from "@/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export function FormatClubId() {
  const router = useRouter();
  const clubId = useSelector((state: RootState) => state.club.clubId);
  if (clubId === undefined || clubId === null) {
    console.log(`클럽아이디 설정안됨`);
    router.push("/");
    return -1;
  }
  return clubId;
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
