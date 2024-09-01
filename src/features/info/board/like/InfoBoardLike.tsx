"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Nav } from "@/components/organisms/Nav";
import { IMAGES } from "@/constants/images";
import BoardItem from "@/features/board/components/BoardItem";
import useMyPostLikeQuery from "@/hook/info/useMyPostLikeQuery";

import { FormatClubId } from "@/utils/extractPathElements";
import "./components/BoardLike.css";

export const InfoBoardLike = () => {
  const clubId = FormatClubId();
  const { data: boardInfo } = useMyPostLikeQuery({
    clubId: clubId,
    category: "FREE",
    page: 0,
    size: 10,
  });
  console.log(boardInfo);

  return (
    <>
      <HistoryHeader title="내가 좋아요 글" />
      {/* TODO: skeleton UI 적용 */}
      {!boardInfo || !boardInfo.data ? (
        <div>Loading...</div>
      ) : (
        <div className="infoBoard">
          {boardInfo?.data?.content?.map((item: any) => (
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
              writer={{
                name: item.writerName,
                profile: item.writerProfileImage ?? IMAGES.profile,
              }}
              type={item.postCategory}
            />
          ))}
        </div>
      )}
      <Nav />
    </>
  );
};
