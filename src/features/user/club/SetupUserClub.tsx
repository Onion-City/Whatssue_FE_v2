"use client";
import GenericForm from "@/hook/user/GenericForm";
import { FunnelProps, StepProps, useFunnel } from "@/hook/user/useFunnel";
import FirstClubRegister from "./components/FirstClubRegister";
import SecondClubRegister from "./components/SecondClubRegister";
import ThirdClubRegister from "./components/ThirdClubRegister";

export interface ProfileSetupInterface {
    steps: string[];
    nextClickHandler: (nextStep: string) => void;
    Funnel: React.ComponentType<FunnelProps>;
    Step: React.ComponentType<StepProps>;
}

interface FormData {
    clubName: string;
    clubContent: string;
    recruit: boolean;
    usernameMethod: string;
    clubImg: string;
    mobile: string;
    link: string[];
}

export default function SetupUserClub(
    ) {
    // 유저 모임 생성 페이지
    
    const steps = [
        '1',
        '2',
        '3'
    ];
    
    const { Funnel, Step, setStep } = useFunnel(steps[0]);

    // 다음 step으로
    const nextClickHandler = (step: string) => {
        console.log('step: ', step);
        setStep(step);
    }

    // 이전 step으로
    const prevClickHandler = (step: string) => {
        setStep(step);
    };

    // 폼 제출 함수
    const submitSignup = () => {
        console.log("form 제출");
    };

    return (
        <>
            <GenericForm<ProfileSetupInterface>
                formOptions={{ mode: 'onChange' }}
                onSubmit={submitSignup}
            >
            <Funnel>
                <Step name="1">
                    <FirstClubRegister 
                        nextClickHandler={nextClickHandler}
                    />
                </Step>
                <Step name="2">
                    <SecondClubRegister 
                        nextClickHandler={nextClickHandler} 
                        prevClickHandler={prevClickHandler}
                    />
                </Step>
                <Step name="3">
                    <ThirdClubRegister />
                </Step>
            </Funnel>
            </GenericForm>
        </>
    );
}
