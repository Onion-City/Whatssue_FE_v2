import { Text } from "@/components/atoms/text";
import { useState } from "react";

export const MemberBtn = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return(
        <>
            <button 
                className="memberBtn"
                onClick={openModal}    
            >
                <Text
                    color="#fff"
                    fontSize="0.9375rem"
                >모임 탈퇴</Text>
            </button>
        </>
    )
}