import "@/components/atoms/search/Search.css";
import useBoard from "@/hook/post/useBoard";
import { FormatPostCategory } from "@/utils/extractPathElements";
import { useCallback, useState } from "react";
import BoardSearchHeader from "./components/BoardSearcHeader";
import FilterBoard from "./components/FilterBoard";

export default function SetupSearchBoard() {
  const [keyword, setKeyword] = useState<string>("");
  const category = FormatPostCategory() === "notice" ? "NOTICE" : "FREE";

  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    refetchPeriodBoard,
    refetchKeywordBoard,
  } = useBoard({
    category,
    keyword,
    startDate: "",
    endDate: "",
  });

  const handleSearch = useCallback(() => {
    refetchKeywordBoard({ keyword });
  }, [keyword, refetchKeywordBoard]);

  return (
    <>
      <BoardSearchHeader
        keyword={keyword}
        setKeyword={setKeyword}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <></>
      ) : keyword === "" ? (
        <></>
      ) : (
        <FilterBoard
          data={data}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </>
  );
}
