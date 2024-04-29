import Next from "@/assets/images/ic_next.png"
import Image from "next/image"

//(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void}
export const NextIcon = ({handleDate} : any) => {
    return(
        <>
            <Image 
                src={Next}
                alt="next"
                onClick={handleDate}
            />
        </>
    )
}