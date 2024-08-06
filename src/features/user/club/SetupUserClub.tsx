"use client";
import { useClubsMutation } from "@/hook/club/useClubsMutation";
import { useFunnel } from "@/hook/user/useFunnel";
import { ClubFormData } from "@/types/club";
import useToast from "@/utils/useToast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import FirstClubRegister from "./components/FirstClubRegister";
import SecondClubRegister from "./components/SecondClubRegister";
import ThirdClubRegister from "./components/ThirdClubRegister";

export default function SetupUserClub() {
  const steps = ["1", "2", "3"];
  const { Funnel, Step, setStep } = useFunnel(steps[0]);

  const methods = useForm<ClubFormData>({
    mode: "onChange",
    defaultValues: {
      clubIntro: "",
      link: "",
      clubName: "",
      contactMeans: "",
      isPrivate: false,
      namePolicy: "REAL_NAME",
      profileImage: {
        url: "",
        imageFile: undefined,
      },
    },
  });
  const { handleSubmit, control } = methods;

  const nextClickHandler = (step: string) => {
    setStep(step);
  };

  const prevClickHandler = (step: string) => {
    setStep(step);
  };
  const { showToast } = useToast();
  const router = useRouter();

  const createClubMutation = useClubsMutation();
  const submitSignup = (data: ClubFormData) => {
    console.log(data);
    try {
      createClubMutation.mutate(data);
      // if (res) {
      //   showToast({
      //     message: "모임 등록이 완료되었습니다.",
      //     type: "success"
      //   });
      //   console.log(res);
      //   router.push('/');
      // }
    } catch (error) {
      if ((error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<any>;
        if (axiosError.response) {
          showToast({
            message: `${axiosError.response.data.message}`,
            type: 'error'
          });
        }
      }
    }
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
