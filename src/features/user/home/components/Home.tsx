import { ChoiceBox } from "@/components/molecules/choiceBox/index";
import { FloatingBox } from "@/components/molecules/floatingBox/FloatingBox";
import { useState } from "react";
import { testArr, testArr2 } from "../constants/testArr/TestArr";
import "./Home.css";
import HomeNoneContent from "./HomeNoneContent";
import MeetingItem from "./MeetingItem";
import RequestedMeetingItem from "./RequestedMeetingItem";
// import HomeNoneContent from "./HomeNoneContent";

const Home = () => {
  const [isChoice, setIsChoice] = useState(0); // 0 === 모임, 1 === 신청한 모임
  const handleChoice = (e: number) => {
    setIsChoice(e);
  };
  return (
    <div className="home">
      <ChoiceBox
        textLeft="모임"
        textRight="신청한 모임"
        onClick={handleChoice}
        isSelected={isChoice}
      />

      <div className="home__content__meeting">
        {isChoice === 0 && testArr.length === 0 && <HomeNoneContent />}
        {isChoice === 0 && testArr.length > 0 && (
          <>
            {/* 모임 */}
            {testArr.map((item, index) => (
              <MeetingItem
                key={index}
                id={item.id}
                title={item.title}
                date={item.date}
                member={item.member}
                contentImg={item.contentImg}
                tag={item.tag}
              />
            ))}
          </>
        )}
        {isChoice !== 0 && testArr2.length === 0 && <HomeNoneContent />}
        {isChoice !== 0 && testArr2.length > 0 && (
          <>
            {/* 신청한 모임 */}
            {testArr2.map((item, index) => (
              <RequestedMeetingItem
                key={index}
                id={item.id}
                title={item.title}
                date={item.date}
                approval={item.approval}
              />
            ))}
          </>
        )}
      </div>

      <div className="home__content__floating">
        <FloatingBox />
      </div>
    </div>
  );
};

export default Home;
