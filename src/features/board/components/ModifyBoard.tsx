import {
    FileListUpload,
    FileListUploadHandler,
} from "@/components/atoms/fileListUpload";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { CreatePostFormData } from "@/hook/post/CreatePostFormData";
import usePostDetailQuery from "@/hook/post/usePostDetailQuery";
import { usePostPatchMutation } from "@/hook/post/usePostPatchMutation";
import { PostFormDatas, PostFormProps } from "@/types/post";
import { formatPostCategory } from "@/utils/extractPathElements";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { REGISTER_INPUT_ARR } from "../constants/constant";
import "./RegisBoard.css";

export const ModifyBoard = () => {
  const getCategory = formatPostCategory() === "free" ? "FREE" : "NOTICE";
  const { handleSubmit, control, setValue, reset } = useForm<PostFormDatas>({
    mode: "onChange",
    defaultValues: {
      request: {
        postTitle: "",
        postContent: "",
        postCategory: getCategory,
      },
      postImages: undefined,
    },
  });
  const { data } = usePostDetailQuery();
  useEffect(() => {
    const postData = data?.data;
    reset({
      request: {
        postTitle: postData?.postTitle,
        postContent: postData?.postContent,
      },
    });
  }, [data]);

  const { handleImageInputChange, handleRemoveImage, uploadImgUrls } =
    FileListUploadHandler({
      setValue,
    });
  const modifyPostMutation = usePostPatchMutation();
  const onSubmit = (data: PostFormProps) => {
    const postFormData = CreatePostFormData(data);
    modifyPostMutation.mutate(postFormData);
  };
  return (
    <form className="board__write__wrapper" onSubmit={handleSubmit(onSubmit)}>
      <>
        <div className="board__write__type">
          <Text color="#989898" fontSize="0.8125rem" fontWeight="500">
            {REGISTER_INPUT_ARR.CATEGORY.content}
          </Text>
          <Text
            color="#fff"
            fontSize="0.8125rem"
            fontWeight="600"
            className="board__write__type__margin"
          >
            {formatPostCategory() === "free"
              ? REGISTER_INPUT_ARR.CATEGORY.FREE
              : REGISTER_INPUT_ARR.CATEGORY.NOTICE}
          </Text>
        </div>
        <div className="board__write__title">
          <input
            placeholder={REGISTER_INPUT_ARR.TITLE.content}
            type="text"
            {...control.register("request.postTitle")}
          />
        </div>
        <div className="board__write__content">
          <InputBox
            title={REGISTER_INPUT_ARR.CONTENT.title}
            maxCnt={REGISTER_INPUT_ARR.CONTENT.maxCnt}
            type={REGISTER_INPUT_ARR.CONTENT.type}
            essential={REGISTER_INPUT_ARR.CONTENT.essential}
            name={REGISTER_INPUT_ARR.CONTENT.name}
            control={control}
          />
        </div>
      </>

      <div className="board__write__bottom">
        <Text color="#fff" fontSize="1.0625rem" fontWeight="600">
          {REGISTER_INPUT_ARR.IMGCONTENT.content}
        </Text>
        <div className="board__write__img">
          <FileListUpload
            itemArr={uploadImgUrls}
            onClick={handleRemoveImage}
            onChange={handleImageInputChange}
          />
        </div>
        <div className="board__write__button" onClick={handleSubmit(onSubmit)}>
          <Text color="#2B2B2B" fontSize="0.9375rem" fontWeight="600">
            수정하기
          </Text>
        </div>
      </div>
    </form>
  );
};
