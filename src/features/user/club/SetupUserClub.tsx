"use client";
import { FunnelProps, StepProps, useFunnel } from "@/hook/user/useFunnel";
import { FormProvider, useForm } from "react-hook-form";
import FirstClubRegister from "./components/FirstClubRegister";
import SecondClubRegister from "./components/SecondClubRegister";
import ThirdClubRegister from "./components/ThirdClubRegister";

export interface ProfileSetupInterface {
    steps: string[];
    nextClickHandler: (nextStep: string) => void;
    Funnel: React.ComponentType<FunnelProps>;
    Step: React.ComponentType<StepProps>;
}

interface imageState {
    url?: string;
    imageFile?: File;
}

interface FormData {
    clubName: string;
    clubIntro: string;
    isPrivate: boolean;
    namePolicy: "REAL_NAME" | "NICK_NAME";
    contactMeans: string;
    link: string[];
    profileImage: imageState;
}

export default function SetupUserClub() {
    const steps = ['1', '2', '3'];
    const { Funnel, Step, setStep } = useFunnel(steps[0]);

    const methods = useForm<FormData>({
        mode: 'onChange'
    });

    const { handleSubmit, control } = methods;

    const nextClickHandler = (step: string) => {
        setStep(step);
    };

    const prevClickHandler = (step: string) => {
        setStep(step);
    };

    const submitSignup = (data: FormData) => {
        console.log("form 제출", data);
    };

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submitSignup)}>
                    <Funnel>
                        <Step name="1">
                            <FirstClubRegister 
                                control={control}
                                nextClickHandler={nextClickHandler}
                            />
                        </Step>
                        <Step name="2">
                            <SecondClubRegister 
                                control={control}
                                nextClickHandler={nextClickHandler} 
                                prevClickHandler={prevClickHandler}
                                handleSubmit={handleSubmit}
                            />
                        </Step>
                        <Step name="3">
                            <ThirdClubRegister />
                        </Step>
                    </Funnel>
                </form>
            </FormProvider>
        </>
    );
}
