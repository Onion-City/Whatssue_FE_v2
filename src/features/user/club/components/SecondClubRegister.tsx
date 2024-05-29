// SecondClubRegister.tsx
import { Button } from "@/components/atoms/button";
import { Step } from "@/components/atoms/steps";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { REGISTER_BTN, REGISTER_INPUT_ARR2 } from "../constants";
import "./SecondClubRegister.css";

const SecondClubRegister = ({ control, nextClickHandler, prevClickHandler, handleSubmit }: any) => {
    return (
        <Wrapper isHeader={true}>
            <div className="register__content">
                <Step currentStep={2} />
                {REGISTER_INPUT_ARR2.map((box, index) => (
                    <InputBox
                        key={index}
                        title={box.title}
                        type={box.type}
                        subtitle={box.subtitle}
                        essential={false}
                        maxCnt={box.maxCnt}
                        name={box.name}
                        control={control}
                    />
                ))}
            </div>
            <div className="register__rowBtn">
                <Button
                    backgroundColor="#404040"
                    color="#fff"
                    size="sm"
                    onClick={() => prevClickHandler('1')}
                >
                    {REGISTER_BTN.prev}
                </Button>
                <Button
                    size="md"
                    onClick={handleSubmit}
                    type="submit"
                >
                    {REGISTER_BTN.complete}
                </Button>
            </div>
        </Wrapper>
    );
};

export default SecondClubRegister;
