import { HomeCalendar } from "@/components/atoms/calendar";
import { Search } from "@/components/atoms/search";
import { useState } from "react";
import "./Home.css";

const HomeHeader = () => {
    const [value, onChange] = useState<Date>(new Date());
    return (
        <div className="homeHeader">
            <Search />
            <HomeCalendar 
                fetchData={(date) => console.log(date)}
                value={value}
                onChange={onChange}
            />
        </div>
    )
};

export default HomeHeader;