import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import "./BottomSheet.css";

interface BottomSheetProps {
    // openFloating: boolean;
    color?: 'white' | 'black';
    setOpenFloating: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({color, setOpenFloating, children}) => {
    const [bottom, setBottom] = useState('-50%');
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            const newHeight = wrapperRef.current?.offsetHeight;
            setBottom(`-${newHeight}px`);
        }
    }, []);

    return(
        <div className="selectClubBox">
            <div className="selectClubBox__background" onClick={() => setOpenFloating(false)}>
            </div>
            <div 
                className={`selectClubBox__wrapper ${color}`}
                ref={wrapperRef}
                style={{
                    bottom
                }}    
            >
                {children}
            </div>
        </div>
    );
}