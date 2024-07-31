import { ChoiceBox } from "@/components/molecules/choiceBox";

export default function ManageAbsentHeader({
  isChoice,
  setIsChoice
}: {
  isChoice: number;
  setIsChoice: (e: number) => void;
}) {
  const handleChoice = (e: number) => {
    setIsChoice(e);
  };
  return (
    <div>
      <ChoiceBox
        textLeft="신청 현황"
        textRight="신청 내역"
        onClick={handleChoice}
        isSelected={isChoice}
      />
    </div>
  )
}
