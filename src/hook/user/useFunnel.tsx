"use client"
import { ReactElement, ReactNode, useState } from "react";

export interface StepProps {
    name: string;
    children: ReactNode;
}

export interface FunnelProps {
    children: Array<ReactElement<StepProps>>;
}

export function useFunnel (defaultStep: string) {
    // Funnel에 대한 custom hook
    const [step, setStep] = useState(defaultStep);

    const Step = (props: StepProps): ReactElement => {
        return <>{props.children}</>;
    };

    const Funnel = ({ children }: FunnelProps) => {
        const targetStep: ReactElement<StepProps> = children.find((childStep) => childStep.props.name === step)!;

        return <>{targetStep}</>
    }

    return { Funnel, Step, setStep, currentStep: step } as const;
}