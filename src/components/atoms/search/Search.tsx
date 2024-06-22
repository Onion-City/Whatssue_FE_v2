import { ICONS } from "@/constants/images";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useDebounce } from "@/hook/schedule/useDebounce";
import { ScheduleKeyword } from "@/types/schedule";
import "./Search.css";

export interface SearchProps {
    refetchKeywordSchedule: ({ keyword }: ScheduleKeyword) => void;
}

export const Search = ({
    refetchKeywordSchedule
}: SearchProps) => {
    const [keyword, setKeyword] = useState('');
    const debounceKeyword = useDebounce({keyword});

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
    };

    useEffect(() => {
        refetchKeywordSchedule({
            keyword
        })
    }, [debounceKeyword])

    return(
        <div className="search">
            <Image 
                src={ICONS.search}
                alt="search"
            />
            <input 
                value={keyword}
                onChange={handleSearch}
                placeholder="일정 검색"
            />
        </div>
    )
}