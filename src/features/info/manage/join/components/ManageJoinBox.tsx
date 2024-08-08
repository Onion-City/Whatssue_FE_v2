import { Checkbox } from "@/components/atoms/checkbox/Checkbox";
import { Text } from "@/components/atoms/text";
import { COLORS } from "@/styles";
import moment from "moment";

interface manageJoinBoxProps {
  idx: number;
  joinId: number;
  name: string;
  date: string;
  selectJoins: number[];
  setSelectJoins: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function ManageJoinBox({
  idx,
  joinId,
  name,
  date,
  selectJoins,
  setSelectJoins
}: manageJoinBoxProps) {
  
  const handleChecked = () => {
    setSelectJoins((prev: number[]) => {
      if (prev.includes(joinId)) {
        return prev.filter(id => id !== joinId);
      } else {
        return [...prev, joinId];
      }
    });
  }
  return (
    <div className="manageJoinBox">
      <div className="manageJoinBox__info">
        <Text
          color={COLORS.white}
          fontSize="1.25rem"
        >{idx + 1}</Text>
        <p>
          <Text
            color={COLORS.white}
            fontSize="1.125rem"
          >{name}</Text>
          <Text
            color={COLORS.white}
            fontSize="0.75rem"
            fontWeight="500"
          >{moment(date).format("YYYY년 MM월 DD일")}</Text>
        </p>
      </div>
      <Checkbox
        isChecked={selectJoins.includes(joinId)}
        handleChecked={handleChecked}
      />
    </div>
  )
}
