import "@/components/atoms/search/Search.css";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import { ChangeEvent, KeyboardEvent } from "react";

interface SearchProps {
  keyword: string;
  setKeyword: (keyword: string) => void;
  onSearch: () => void;
}

const BoardSearchHeader = ({ keyword, setKeyword, onSearch }: SearchProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(); // 엔터 키 입력 시 검색 처리
    }
  };

  return (
    <div className="search">
      <Image src={ICONS.search} alt="search" />
      <input
        value={keyword}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="게시글 검색"
      />
    </div>
  );
};

export default BoardSearchHeader;
