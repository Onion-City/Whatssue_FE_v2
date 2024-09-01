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

  return (
    <>
      <HistoryHeader title="내가 쓴 댓글" />
      {/* TODO: skeleton UI 적용 */}
      {!commentInfo || !commentInfo.data ? (
        <div>Loading...</div>
      ) : (
        <div className="infoBoard">
          {commentInfo?.data?.myCommentList?.content?.map((item: any) => (
            <BoardItem
              key={item.post.postId}
              // boardAddress={boardTypeAddress}
              id={item.post.postId}
              title={item.post.postTitle}
              content={item.post.postContent}
              createdAt={item.post.createdAt}
              commentCount={item.post.commentCount}
              contentImgs={item.post.uploadImage ?? IMAGES.profile}
              hearts={item.post.postLikeCount}
              isHeart={item.post.isLiked}
              writer={{
                name: item.post.writerName,
                profile: item.post.writerProfileImage ?? IMAGES.profile,
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
