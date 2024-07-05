import submitIcon from "@/assets/images/ic_commentSubmit.png";
import { useCommentChildMutation } from "@/hook/comment/useCommentChildMutation";
import { useCommentMutation } from "@/hook/comment/useCommentMutation";
import { CommentData } from "@/types/comment";
import { formatClubId, formatPostId } from "@/utils/extractPathElements";
import Image from "next/image";
import { useForm } from "react-hook-form";
import "./CommentInput.css";

interface props {
  parentId?: number;
}
export const CommentInput = ({ parentId }: props) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<CommentData>({
    mode: "onSubmit",
    defaultValues: {
      postId: undefined,
      content: "",
    },
  });
  const currentInfo = {
    clubId: formatClubId(),
    postId: formatPostId(),
  };
  const { mutate: ToCommentMutate } = useCommentMutation(currentInfo);
  const { mutate: ToCommentChildMutate } = useCommentChildMutation(currentInfo);

  const onCommentSubmit = (data: CommentData) => {
    const postData = {
      ...data,
      postId: currentInfo.postId,
    };
    ToCommentMutate(postData);

    reset();
  };
  const onCommentChildSubmit = (data: CommentData) => {
    const postData = {
      ...data,
      postId: currentInfo.postId,
      parentId: parentId,
    };
    ToCommentChildMutate(postData);
    reset();
  };
  const handleCommantFn =
    parentId === undefined ? onCommentSubmit : onCommentChildSubmit;
  return (
    <div
      className="comment__input__wrapper"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
    >
      <form onSubmit={handleSubmit(handleCommantFn)} className="comment__input">
        <input placeholder="댓글을 입력해주세요." {...register("content")} />
        <label className="submit-button-label" htmlFor="submit-button">
          <Image src={submitIcon} alt="submit" />
        </label>
        <button id="submit-button" type="submit" style={{ display: "none" }} />
      </form>
    </div>
  );
};
