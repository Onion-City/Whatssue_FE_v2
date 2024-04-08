"use client";
import Back from "@/assets/images/Back.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Header.css";

export function HistoryHeader () {
    const router = useRouter();
    return (
        <header id="header">
            <div className="historyHeader">
                <span className="historyHeader__img">
                    <Image 
                        src={Back}
                        alt="back"
                        placeholder="blur"
                        onClick={() => router.back()}
                    />
                </span>
            </div>
        </header>
    );
};
