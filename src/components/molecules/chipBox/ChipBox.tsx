import { Chip } from "@/components/atoms/chip";
import { REGISTER_CHIP_ARR } from "@/features/user/club/register/const";
import React, { useState } from "react";
import "./ChipBox.css";

export function ChipBox () {
    const [selectedChip, setSelectedChip] = useState(0);
    return (
        <div className="chipBox">
            {REGISTER_CHIP_ARR.map((text, index) => (
                <React.Fragment key={index}>
                    <Chip chipOn={index === selectedChip} onClick={() => setSelectedChip(index)}>{text}</Chip>
                </React.Fragment>
            ))}
        </div>
    );
};
