import { Text } from "@/components/atoms/text";
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "./SelectClubBox.css";

interface SelectClubBoxProps {
    // openFloating: boolean;
    setOpenFloating: Dispatch<SetStateAction<boolean>>;
}

export const SelectClubBox: React.FC<SelectClubBoxProps> = ({setOpenFloating}) => {
    const [bottom, setBottom] = useState('-50%');
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            const newHeight = wrapperRef.current?.offsetHeight;
            setBottom(`-${newHeight}px`);
        }
    }, []);

    return(
        <div className="selectClubBox" onClick={() => setOpenFloating(false)}>
            <div 
                className="selectClubBox__wrapper"
                ref={wrapperRef}
                style={{
                    bottom
                }}    
            >
                <span  onClick={() => setOpenFloating(false)}>
                    <Text
                        color="#fff"
                        fontSize="1.0625rem"
                        fontWeight="500"
                    >배드민턴 모임</Text>
                </span>
                <span>
                    <Text
                        color="#fff"
                        fontSize="1.0625rem"
                        fontWeight="500"
                    >떵개 식사 모임</Text>
                </span>
            </div>
        </div>
    );
}