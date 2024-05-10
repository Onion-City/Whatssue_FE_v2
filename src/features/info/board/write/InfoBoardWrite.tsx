import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import BoardItem from "@/features/board/components/BoardItem";
import { testArr } from "@/features/board/constants/testArr/TestArr";

import "./components/BoardWrite.css";

export const InfoBoardWrite = () => {
    return(
        <>
            <HistoryHeader 
                title="내가 쓴 글"
            />
            <div className="infoBoard">
                {testArr.map((item, index) => (
                <BoardItem
                    key={index}
                    // boardAddress={boardTypeAddress}
                    id={item.id}
                    title={item.title}
                    content={item.content}
                    date={item.date}
                    contentImgs={item.contentImgs}
                    comment={item.comment}
                    hearts={item.hearts}
                    isHeart={item.isHeart}
                    writer={item.writer}
                />
                ))}
            </div>
            <Nav />
        </>
    )
};