"use client";

import React, { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

import { Chip } from "@/components/atoms/chip";
import { REGISTER_CHIP_ARR } from "@/features/user/club/constants";
import "./ChipBox.css";

export interface ChipBoxProps {
    field: ControllerRenderProps<any, any>;
}

export function ChipBox ({ field }: ChipBoxProps) {
    const [selectedChip, setSelectedChip] = useState(field.value && field.value === "NICK_NAME" ? 1 : 0);
    const handleChip = (id: number, name: string) => {
        setSelectedChip(id);
        field.onChange(name);
    }
    return (
        <div className="chipBox">
            {REGISTER_CHIP_ARR.map((chip) => (
                <React.Fragment key={chip.id}>
                    <Chip 
                        chipOn={chip.id === selectedChip} 
                        onClick={() => handleChip(chip.id, chip.name)}
                    >{chip.txt}</Chip>
                </React.Fragment>
            ))}
        </div>
    );
};
