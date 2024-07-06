// useCertificationQuery.tsx
import { http } from "@/apis/http";
import { CommonNoPageRes } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

const fetchCertification = async ({
  toNumber,
  certificationNum,
}: {
  toNumber: string;
  certificationNum: number;
}): Promise<CommonNoPageRes<string>> => {
  const response = await http.get<CommonNoPageRes<string>>(
    `/certification/check-random-number?toNumber=${toNumber}&certificationNum=${certificationNum}`
  );
  return response;
};

export const useCertificationQuery = () => {
  const queryClient = useQueryClient();

  const certificationQuery = async ({
    toNumber,
    certificationNum,
  }: {
    toNumber: string;
    certificationNum: number;
  }) => {
    const result = await queryClient.fetchQuery({
      queryKey: ["certification", { toNumber, certificationNum }],
      queryFn: () => fetchCertification({ toNumber, certificationNum }),
    });
    return result;
  };

  return { certificationQuery };
};


// export const useCertificationQuery = async ({
//   toNumber,
//   certificationNum,
// }: {
//   toNumber: string;
//   certificationNum: number;
// }) => {
//   return useQuery<string>({
//     queryKey: ["certification", { toNumber, certificationNum }],
//     queryFn: async () => await fetchCertification({ toNumber, certificationNum })
// });
// };