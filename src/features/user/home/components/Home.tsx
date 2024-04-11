import testimg from "@/assets/images/chiikyaw.png";
import { Text } from "@/components/atoms/text";
import { FloatingBox } from "@/components/molecules/floatingBox/FloatingBox";
import { useState } from "react";
import "./Home.css";
import HomeNoneContent from "./HomeNoneContent";
import MeetingItem from "./MeetingItem";
import RequestedMeetingItem from "./RequestedMeetingItem";
// import HomeNoneContent from "./HomeNoneContent";

const testArr = [
  {
    id: 1,
    title: "파주배드민턴소모임안녕하세요^^123456677",
    date: "2024.03.05",
    member: 43,
    contentImg: testimg,
    tag: "일반",
  },
  {
    id: 2,
    title: "싸펑피펑",
    date: "2024.03.05",
    member: 313,
    contentImg: testimg,
    tag: "일반",
  },
  {
    id: 3,
    title: "안녕하세요",
    date: "2024.03.05",
    member: 43,
    contentImg: null,
    tag: "우수",
  },
];
const testArr2 = [
  {
    id: 1,
    title: "떵개 식사 모임",
    date: "2024.03.05",
    approval: true,
  },
  {
    id: 2,
    title: "떵개 식사 모임",
    date: "2024.03.05",
    approval: false,
  },
];
const Home = () => {
  const [isChoice, setIsChoice] = useState(0); // 0 === 모임, 1 === 신청한 모임
  const handleChoice = (e: number) => {
    setIsChoice(e);
  };
  const leftColor = isChoice === 0 ? "#51F8C4" : "#989898";
  const rightColor = isChoice === 1 ? "#51F8C4" : "#989898";

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__choice">
          <div
            className="home__content__choice__box"
            onClick={() => handleChoice(0)}
          >
            <Text color={leftColor} fontSize="0.9375rem" fontWeight="600">
              모임
            </Text>
          </div>
          <div
            className="home__content__choice__box"
            onClick={() => handleChoice(1)}
          >
            <Text color={rightColor} fontSize="0.9375rem" fontWeight="600">
              신청한 모임
            </Text>
          </div>
        </div>
        <div className="home__content__choice__line_wrapper">
          <hr
            className="home__content__choice__line"
            style={{ background: `${leftColor}` }}
          />
          <hr
            className="home__content__choice__line"
            style={{ background: `${rightColor}` }}
          />
        </div>
      </div>

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
