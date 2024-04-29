import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./Search.css";

export const Search = () => {
    return(
        <div className="search">
            <Image 
                src={ICONS.search}
                alt="search"
            />
            <input 
                placeholder="일정 검색"
            />
        </div>
    )
}