import Next from "@/assets/images/ic_next.png"
import Image from "next/image"

//(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void}
export const NextIcon = ({handleDate} : any) => {
    return(
        <div
            id="next"
            onClick={handleDate}
        >
            <Image 
                src={Next}
                alt="next"
            />
        </div>
    )
}