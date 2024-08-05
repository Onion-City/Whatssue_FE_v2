import { Button } from "@/components/atoms/button";
import { COLORS } from "@/styles";
import { BTN, NUMBER, TOTAL } from "../constants";

import { Text } from "@/components/atoms/text";
import "./ManageJoin.css";

export default function ManageJoinHeader({
  memberCnt,
  selectJoins
}: {
  memberCnt: number;
  selectJoins: number[];
}) {
  const mutationJoin = (type: boolean) => {

  }
  return (
    <div className="manageJoinHeader">
      <p className="manageJoinHeader__title">
        <Text
          fontSize="0.875rem"
          color={COLORS.white}
        >{TOTAL}</Text>
        <Text
          fontSize="1.125rem"
          color={COLORS.white}
        >{memberCnt}</Text> 
        <Text
          fontSize="0.875rem"
          color={COLORS.white}
        >{NUMBER}</Text>
      </p>
      <p className="manageJoinHeader__btn">
        <Button
          size="lt"
          backgroundColor={COLORS.white}
          onClick={() => mutationJoin(false)}
        >{BTN.reject}</Button>
        <Button
          size="lt"
          onClick={() => mutationJoin(true)}
        >{BTN.accept}</Button>
      </p>
    </div>
  )
}
