import { PostDetailProps } from "@/types/post";

export const postKeys = {
  all: ["post"] as const,
  detail: ({ clubId, postId }: PostDetailProps) =>
    [...postKeys.all, { clubId, postId }] as const,
  comment: ({ clubId, postId }: PostDetailProps) =>
    [...postKeys.detail({ clubId, postId }), "comment"] as const,
};

export const categoryKeys = {
  all: ["categoty"] as const,
};
