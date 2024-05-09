"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface routerBtnProps {
    path: string;
    onClick?: any;
    children: React.ReactNode;
};

export const RouterBtn = ({path, onClick, children}: routerBtnProps) => {
    const router = useRouter();
    const handleRouter = () => {
        onClick && onClick();
        router.push(path);
    }
    return (
        <div 
            onClick={handleRouter} 
            style={{ cursor: 'pointer' }}
        >
            {children}
        </div>
    )
}