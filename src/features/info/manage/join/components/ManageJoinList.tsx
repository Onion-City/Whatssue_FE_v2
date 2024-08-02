import { Checkbox } from "@/components/atoms/checkbox/Checkbox";
import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import { useState } from "react";
import { TXT } from "../constants";
import ManageJoinBox from "./ManageJoinBox";

import "./ManageJoin.css";

export default function ManageJoinList() {
  const memberList = [
    {
      idx: 0,
      joinId: 111,
      name: "문해빈",
      date: "2024-03-02"
    },
    {
      idx: 1,
      joinId: 222,
      name: "문해빈",
      date: "2024-03-02"
    },
    {
      idx: 2,
      joinId: 333,
      name: "문해빈",
      date: "2024-03-02"
    },
    {
      idx: 3,
      joinId: 444,
      name: "문해빈",
      date: "2024-03-02"
    },
  ];

  const [isChecked, setIsChecked] = useState(false); // 전체선택 여부
  const [selectJoins, setSelectJoins] = useState<number[]>([]);
  
  const handleChecked = () => {
    if (isChecked) {
      setSelectJoins([]);
    } else {
      const newMembers = memberList.map(el => el.joinId);
      setSelectJoins(newMembers);
    }
    setIsChecked(prev => !prev);
  };

  return (
    <div className="manageJoinList">
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
      <div className="manageJoinList__content">
        {
          memberList
            ?.map((item) => 
              <ManageJoinBox
                key={item.joinId}
                idx={item.idx}
                joinId={item.joinId}
                name={item.name}
                date={item.date}
                selectJoins={selectJoins}
                setSelectJoins={setSelectJoins}
              />
            )
        }
      </div>
    </div>
  )
}
