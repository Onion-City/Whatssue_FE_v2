import { Checkbox } from "@/components/atoms/checkbox/Checkbox";
import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { Dispatch, SetStateAction, useState } from "react";
import { TXT } from "../constants";
import ManageJoinBox from "./ManageJoinBox";

import { ClubJoin } from "@/types/info";
import "./ManageJoin.css";

export default function ManageJoinList({
  joinList,
  selectJoins,
  setSelectJoins
}: {
  joinList: ClubJoin[],
  selectJoins: number[],
  setSelectJoins: Dispatch<SetStateAction<number[]>>
}) {
  const [isChecked, setIsChecked] = useState(false); // 전체선택 여부
  
  const handleChecked = () => {
    if (isChecked) {
      setSelectJoins([]);
    } else {
      const newMembers = joinList.map(el => el.id);
      setSelectJoins(newMembers);
    }
    setIsChecked(prev => !prev);
  };

  return (
    <div className="manageJoinList">
      {
        joinList &&
        joinList.length > 0 &&
        <div className="manageJoinList__check">
          <Text
            color={COLORS.white}
            fontWeight="500"
          >{TXT.all}</Text>
          <Checkbox 
            isChecked={isChecked}
            handleChecked={handleChecked}
          />
        </div>
      }
      <div className="manageJoinList__content">
        {
          joinList
            ?.map((item, idx) => 
              <ManageJoinBox
                key={idx}
                idx={idx}
                joinId={item.id}
                name={item.userName}
                date={item.createdAt}
                selectJoins={selectJoins}
                setSelectJoins={setSelectJoins}
              />
            )
        }
      </div>
    </div>
  )
}
