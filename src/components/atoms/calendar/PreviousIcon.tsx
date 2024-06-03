import PrevIcon from "@/assets/images/ic_prev.png"
import Image from "next/image"

//(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void}
export const PreviousIcon = ({handleDate} : any) => {
    return(
        <div
            id="prev"
            onClick={handleDate}
        >
            <Image 
                src={PrevIcon}
                alt="prev"
            />
        </div>
    )
}