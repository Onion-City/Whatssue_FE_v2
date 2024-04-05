"use client";
import { FunnelProps, StepProps, useFunnel } from "@/hook/user/useFunnel";
import ClubRegister from "./components/ClubRegister";

export interface ProfileSetupInterface {
    steps: string[];
    nextClickHandler: (nextStep: string) => void;
    Funnel: React.ComponentType<FunnelProps>;
    Step: React.ComponentType<StepProps>;
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
        setStep(step);
    }

    // 이전 step으로
    const prevClickHandler = (step: string) => {
        setStep(step);
    };

    return (
        <>
            <Funnel>
                <Step name="1">
                    <ClubRegister />
                </Step>
                <Step name="2">
                    <div onClick={() => nextClickHandler(steps[2])}>2번 화면</div>
                </Step>
                <Step name="3">
                    <div onClick={() => prevClickHandler(steps[1])}>3번 화면</div>
                </Step>
            </Funnel>
        </>
    );
}
