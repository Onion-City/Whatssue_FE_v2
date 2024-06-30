import submitIcon from "@/assets/images/ic_commentSubmit.png";
import { useCommentChildMutation } from "@/hook/comment/useCommentChildMutation";
import { useCommentMutation } from "@/hook/comment/useCommentMutation";
import { CommentData } from "@/types/comment";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import "./CommentInput.css";

interface props {
  parentId?: number;
}
export const CommentInput = ({ parentId }: props) => {
  const path = usePathname();
  const pathProps = path.split("/").slice(1);
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
  const { mutate: ToCommentMutate } = useCommentMutation({
    clubId: parseInt(pathProps[0], 10),
    postId: parseInt(pathProps[3], 10),
  });
  const { mutate: ToCommentChildMutate } = useCommentChildMutation({
    clubId: parseInt(pathProps[0], 10),
    postId: parseInt(pathProps[3], 10),
  });
  const onCommentSubmit = (data: CommentData) => {
    const postData = {
      ...data,
      postId: parseInt(pathProps[3], 10),
    };
    ToCommentMutate(postData);
    reset();
  };
  const onCommentChildSubmit = (data: CommentData) => {
    const postData = {
      ...data,
      postId: parseInt(pathProps[3], 10),
      parentId: parentId,
    };
    ToCommentChildMutate(postData);
    reset();
  };
  const handleCommantFn =
    parentId === undefined ? onCommentSubmit : onCommentChildSubmit;
  return (
    <div className="comment__input__wrapper">
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
