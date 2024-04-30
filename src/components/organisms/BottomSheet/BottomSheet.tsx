import { ClubBox } from "@/components/molecules/clubBox";
import { IMAGES } from "@/constants/images";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { RouterBtn } from "../RouterBtn/RouterBtn";
import "./BottomSheet.css";

interface BottomSheetProps {
    // openFloating: boolean;
    setOpenFloating: Dispatch<SetStateAction<boolean>>;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({setOpenFloating}) => {
    const [bottom, setBottom] = useState('-50%');
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            const newHeight = wrapperRef.current?.offsetHeight;
            setBottom(`-${newHeight}px`);
        }
    }, []);

    const clubList = [
        {
            clubId: 1,
            clubName: "배드민턴 모임",
            clubImg: IMAGES.profile
        },
        {
            clubId: 2,
            clubName: "떵개 식사 모임",
            clubImg: IMAGES.profile
        }
    ]

    return(
        <div className="selectClubBox" onClick={() => setOpenFloating(false)}>
            <div 
                className={"selectClubBox__wrapper "}
                ref={wrapperRef}
                style={{
                    bottom
                }}    
            >
                {clubList?.map((club) => (
                    <React.Fragment key={club.clubId}>
                        <RouterBtn
                            path={`${club.clubId}`}
                            onClick={() => setOpenFloating(false)}
                        >
                            <ClubBox
                                clubImg={club.clubImg}
                            >{club.clubName}</ClubBox>
                        </RouterBtn>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}