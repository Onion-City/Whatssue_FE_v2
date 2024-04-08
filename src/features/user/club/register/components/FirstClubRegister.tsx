import { Button } from "@/components/atoms/button";
import { Step } from "@/components/atoms/steps";
import { InputBox } from "@/components/molecules/inputBox";
import { REGISTER_BTN, REGISTER_INPUT_ARR } from "../const";
import "./FirstClubRegister.css";

const FirstClubRegister = ({nextClickHandler}: any) => {
    return(
        <div className="register">
            <div className="register__content">
                <Step currentStep={1}/>
                {REGISTER_INPUT_ARR.map((box, index) => (
                    <InputBox 
                        key={index}
                        title={box.title && box.title}
                        maxCnt={box.maxCnt && box.maxCnt}
                        type={box.type && box.type}
                        subtitle={box.subtitle && box.subtitle}
                        essential={true}
                        name={box.name && box.name}
                    />
                ))}
            </div>
            <div className="register__btn">
                <Button onClick={() => nextClickHandler('2')}>{REGISTER_BTN.next}</Button>
            </div>
        </div>
    );
};

export default FirstClubRegister;