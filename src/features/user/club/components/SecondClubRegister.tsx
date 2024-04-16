import { Button } from "@/components/atoms/button";
import { Step } from "@/components/atoms/steps";
import { InputBox } from "@/components/molecules/inputBox";
import { Wrapper } from "@/components/organisms/Wrapper";
import { REGISTER_BTN, REGISTER_INPUT_ARR2 } from "../constants";
import "./SecondClubRegister.css";

const SecondClubRegister = ({nextClickHandler, prevClickHandler}: any) => {
    return(
        <Wrapper>
            <div className="register__content">
                <Step currentStep={2}/>
                {REGISTER_INPUT_ARR2.map((box, index) => (
                    <InputBox 
                        key={index}
                        title={box.title && box.title}
                        type={box.type && box.type}
                        subtitle={box.subtitle && box.subtitle}
                        essential={false}
                        maxCnt={box.maxCnt && box.maxCnt}
                    />
                ))}
            </div>
            <div className="register__rowBtn">
                <Button backgroundColor="#404040" color="#fff" size="sm" onClick={() => prevClickHandler('1')}>{REGISTER_BTN.prev}</Button>
                <Button size="md" onClick={() => nextClickHandler('3')}>{REGISTER_BTN.complete}</Button>
            </div>
        </Wrapper>
    );
};

export default SecondClubRegister;