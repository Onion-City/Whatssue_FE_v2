"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { IMAGES } from "@/constants/images";
import BoardItem from "@/features/board/components/BoardItem";

import "@/features/info/board/write/components/BoardWrite.css";
import useMyCommentQuery from "@/hook/info/useMyCommentQuery";

export const InfoBoardComment = () => {
    const { data: commentInfo } = useMyCommentQuery({
        page: 0,
        size: 10,
    });
    console.log(commentInfo);

    return(
        <>
            <HistoryHeader 
                title="내가 쓴 댓글"
            />
            {/* TODO: skeleton UI 적용 */}
            {
                !commentInfo || !commentInfo.data ? 
                <div>Loading...</div> :
                (
                    <div className="infoBoard">
                        {commentInfo?.data?.content?.map((item: any) => (
                            <BoardItem
                                key={item.postId}
                                // boardAddress={boardTypeAddress}
                                id={item.postId}
                                title={item.postTitle}
                                content={item.postContent}
                                createdAt={item.createdAt}
                                commentCount={item.commentCount}
                                contentImgs={item.uploadImage ?? []}
                                hearts={item.postLikeCount}
                                isHeart={item.isLiked}
                                writer={{ name: item.writerName, profile: item.writerProfileImage ?? IMAGES.profile }}
                            />
                        ))}
                    </div>
                )
            }
            <Nav />
        </>
    )
};