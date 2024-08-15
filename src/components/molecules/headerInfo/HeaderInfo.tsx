"use client";
import { HeaderClubInfo } from "@/components/atoms/headerClubInfo";
import { HeaderContent } from "@/components/atoms/headerContent";
import { HeaderMyInfo } from "@/components/atoms/headerMyInfo";
import PostDropdown from "@/components/organisms/PostDropdown/PostDropdown";
import { ICONS, IMAGES } from "@/constants/images";
import { useMemberAuthQuery } from "@/hook/member/useMemberAuthQuery";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import "./HeaderInfo.css";

interface isHeaderInfo {
  isBack?: boolean;
  isClubInfo?: boolean;
  isMyInfo?: boolean;
  isSearch?: boolean;
  content?: string;
  content2?: { title: string; subTitle: string };
  isDropdown?: {
    text: string;
    onClick?: () => void;
  }[];
  color?: string;
  children?: React.ReactNode;
}
function Search() {
  return (
    <div className="search__icon">
      <Image src={ICONS.search} alt="search" width={100} height={100} />
    </div>
  );
}
export function HeaderInfo({
  isBack = false,
  isClubInfo = false,
  isMyInfo = false,
  isSearch = false,
  content,
  content2,
  isDropdown,
  color,
  children,
}: isHeaderInfo) {
  const router = useRouter();
  const saveData = useSelector((state: RootState) => state.club.children);
  const { data: loadData, isError, error } = useMemberAuthQuery();
  if (isError) {
    console.log(error.response?.status);
    if (error.response?.status)
      router.push("/user/onboarding?policy=REAL_NAME");
  }
  if (loadData === undefined) return;
  const clubInfo = saveData.memberId === -1 ? loadData.data : saveData;
  return (
    <header id="header">
      <div className={`Header__info__wrapper Header__info ${color && "black"}`}>
        {isBack && (
          <div className="back_icon">
            <Image
              src={IMAGES.back}
              alt="back"
              placeholder="blur"
              onClick={() => router.back()}
            />
          </div>
        )}
        {isClubInfo && (
          <HeaderClubInfo
            clubName={clubInfo.clubName}
            clubImg={clubInfo.clubProfileImage}
          />
        )}
        {isMyInfo && (
          <HeaderMyInfo
            memberName={clubInfo.memberName}
            memberImg={clubInfo.memberProfileImage}
            memberRole={clubInfo.role}
          />
        )}
        {content && <HeaderContent content={content} />}
        {content2 && (
          <HeaderContent title={content2.title} subTitle={content2.subTitle} />
        )}
        {isSearch && <Search />}
        {isDropdown && isDropdown.length > 0 && (
          <PostDropdown item={isDropdown} />
        )}
      </div>
    </header>
  );
}
