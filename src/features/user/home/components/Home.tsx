import { ChoiceBox } from "@/components/molecules/choiceBox/index";
import { FloatingBox } from "@/components/molecules/floatingBox/FloatingBox";

import { useClubJoinQuery } from "@/hook/clubJoin/useClubJoinQuery";
import { useClubListQuery } from "@/hook/user/useClubListQuery";
import { useState } from "react";
import "./Home.css";
import HomeNoneContent from "./HomeNoneContent";
import MeetingItem from "./MeetingItem";
import RequestedMeetingItem from "./RequestedMeetingItem";
// import HomeNoneContent from "./HomeNoneContent";

const Home = () => {
  const { data: clubList, isLoading } = useClubListQuery({ page: 0, size: 10 });
  const { data: requestedClubList, isLoading: isLoading2 } =
    useClubJoinQuery();
  const [isChoice, setIsChoice] = useState(0); // 0 === 모임, 1 === 신청한 모임
  const handleChoice = (e: number) => {
    setIsChoice(e);
  };
  console.log(clubList?.data);
  return (
    <div className="home">
      <ChoiceBox
        textLeft="모임"
        textRight="신청한 모임"
        onClick={handleChoice}
        isSelected={isChoice}
      />

      <div className="home__content__meeting">
        {isChoice === 0 && isLoading && <div>Loading...</div>}
        {clubList && isChoice === 0 && (
          <>
            {clubList?.data?.content && clubList?.data?.content?.length === 0 ? (
              <HomeNoneContent />
            ) : (
              <>
                {console.log(clubList.data)}
                {/* 모임 */}
                {clubList?.data?.content &&
                  clubList?.data?.content.map((item, idx) => (
                    <MeetingItem
                      key={idx}
                      clubId={item.clubId}
                      clubName={item.clubName}
                      createdAt={item.createdAt}
                      role={item.role}
                      clubProfileImage={item.clubProfileImage}
                      memberCount={item.memberCount}
                    />
                  ))}
              </>
            )}
          </>
        )}
        {isChoice !== 0 && isLoading2 && <div>Loading</div>}
        {isChoice !== 0 && requestedClubList && (
          <>
            {requestedClubList?.data?.content &&
            requestedClubList?.data?.content?.length === 0 ? (
              <HomeNoneContent />
            ) : (
              <>
                {console.log("dkdk", requestedClubList.data)}
                {/* 모임 */}
                {requestedClubList?.data?.content &&
                  requestedClubList?.data?.content?.map((item, idx) => (
                    <RequestedMeetingItem
                      key={idx}
                      clubJoinRequestId={item.clubJoinRequestId}
                      clubId={item.clubId}
                      clubName={item.clubName}
                      updatedAt={item.updatedAt}
                      status={item.status}
                    />
                  ))}
              </>
            )}
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
