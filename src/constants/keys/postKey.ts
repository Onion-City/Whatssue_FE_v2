import { CommentkeyProps } from "@/types/comment";
import { PostDetailProps } from "@/types/post";

export const postKeys = {
  all: ["post"] as const,
  detail: ({ clubId, postId }: PostDetailProps) =>
    [...postKeys.all, { clubId, postId }] as const,
};
export const commentKeys = {
  comment: ({ clubId, postId }: CommentkeyProps) =>
    [...postKeys.detail({ clubId, postId }), "comment"] as const,
  commentChild: ({ clubId, postId, parentId }: CommentkeyProps) =>
    [
      ...commentKeys.comment({ clubId, postId }),
      { parentId }, // Include parentId here to maintain context
      "commentChild",
    ] as const,
};
export const categoryKeys = {
  all: ["categoty"] as const,
};
