"use client";
import { useClubsMutation } from "@/hook/club/useClubsMutation";
import { useFunnel } from "@/hook/user/useFunnel";
import { ClubFormData } from "@/types/club";
import { FormProvider, useForm } from "react-hook-form";
import FirstClubRegister from "./components/FirstClubRegister";
import SecondClubRegister from "./components/SecondClubRegister";
import ThirdClubRegister from "./components/ThirdClubRegister";

// interface ProfileSetupInterface {
//   steps: string[];
//   nextClickHandler: (nextStep: string) => void;
//   Funnel: React.ComponentType<FunnelProps>;
//   Step: React.ComponentType<StepProps>;
// }


export default function SetupUserClub() {
  const steps = ["1", "2", "3"];
  const { Funnel, Step, setStep } = useFunnel(steps[0]);

  const methods = useForm<ClubFormData>({
    mode: "onChange",
  });
  const { handleSubmit, control } = methods;

  const nextClickHandler = (step: string) => {
    setStep(step);
  };

  const prevClickHandler = (step: string) => {
    setStep(step);
  };
  const createClubMutation = useClubsMutation();
  const submitSignup = (data: ClubFormData) => {
    createClubMutation.mutate(data);
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
