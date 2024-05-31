import { HomeCalendar } from "@/components/atoms/calendar";
import { Search } from "@/components/atoms/search";
import { useContext } from 'react';
import { ScheduleContext } from '../SetHome'; // Adjust the path as needed
import "./Home.css";

const HomeHeader = ({ mark }: {
    mark: string[]
}) => {
    const { value, onChange } = useContext(ScheduleContext);
    return (
        <div className="homeHeader">
            <Search />
            <HomeCalendar 
                // fetchData={(date) => console.log(date)}
                value={value}
                onChange={onChange}
                mark={mark}
            />
        </div>
    )
};

export default HomeHeader;
