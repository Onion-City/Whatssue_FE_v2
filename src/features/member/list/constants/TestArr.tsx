import { UserRole } from "@/components/atoms/memberProfile/MemberProfile";
import { IMAGES } from "@/constants/images";

export const MemberTestArr1 = [
    { name: "강희dd", isUser: UserRole.me, message: "dkssudgk" },
    { name: "강희dd", isUser: UserRole.manager, message: "dkssudgk" },
    { name: "강희dd", message: "dkssudgk" },
    { name: "강희dd", isUser: UserRole.other, message: "dkssudgk", profile:IMAGES.loginKakao},
    { name: "강희dd", isUser: UserRole.manager, message: "dkssudgk" },
    { name: "강희dd", isUser: UserRole.manager, message: "dkssudgk" },
];
