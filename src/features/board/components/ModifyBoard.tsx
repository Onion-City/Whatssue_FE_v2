import { FileListUpload } from "@/components/atoms/fileListUpload";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { ModifyPostFormData } from "@/hook/post/ModifyPostFormData";
import usePostDetailQuery from "@/hook/post/usePostDetailQuery";
import { usePostPatchMutation } from "@/hook/post/usePostPatchMutation";
import { PostUpdataFormProps } from "@/types/post";
import { FormatPostCategory } from "@/utils/extractPathElements";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MODIFY_INPUT_ARR, REGISTER_INPUT_ARR } from "../constants/constant";
import "./RegisBoard.css";

export const ModifyBoard = () => {
  const [imgObject, setImgObject] = useState<{ [key: string]: string }>({});
  const [imgDeletePath, setImgDeletePath] = useState<string[]>([]);
  const [uploadImgFiles, setUploadImgFiles] = useState<File[]>([]);
  const [uploadImgUrls, setUploadImgUrls] = useState<string[]>([]);

  const { handleSubmit, control, setValue, reset } =
    useForm<PostUpdataFormProps>({
      mode: "onChange",
      defaultValues: {
        postRequest: {
          postTitle: "",
          postContent: "",
          deleteImages: [],
          maintainImages: {},
        },
      },
    });
  const { data } = usePostDetailQuery();
  useEffect(() => {
    const postData = data?.data;
    if (postData == undefined) {
      return;
    }
    reset({
      postRequest: {
        postTitle: postData.postTitle,
        postContent: postData.postContent,
        maintainImages: postData.uploadImage,
        deleteImages: [],
      },
    });
    setUploadImgUrls(Object.values(postData.uploadImage));
    setImgObject(postData.uploadImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    if (uploadImgFiles.length + files.length <= 10) {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setUploadImgFiles([...uploadImgFiles, ...files]);
      setUploadImgUrls([...uploadImgUrls, ...newImages]),
        setValue("postImages", [...uploadImgFiles, ...files]);
    } else {
      alert(REGISTER_INPUT_ARR.IMGCONTENT.alert);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = uploadImgFiles.filter((_, idx) => idx !== index);
    const updatedUrls = uploadImgUrls.filter((_, idx) => idx !== index);
    setUploadImgFiles(updatedFiles);
    setUploadImgUrls(updatedUrls), setValue("postImages", updatedFiles);
    handleDeleteImgKeys(uploadImgUrls[index]);
  };

  const handleDeleteImgKeys = (value: string) => {
    for (let key in imgObject) {
      if (imgObject[key] === value) {
        setImgDeletePath([...imgDeletePath, imgObject[key]]);
        delete imgObject[key];
        break;
      }
    }
  };
  const modifyPostMutation = usePostPatchMutation();
  const onSubmit = (data: PostUpdataFormProps) => {
    data.postRequest.deleteImages = imgDeletePath;
    data.postRequest.maintainImages = imgObject;
    console.log(data);
    const postFormData = ModifyPostFormData(data);
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
            {FormatPostCategory() === "free"
              ? REGISTER_INPUT_ARR.CATEGORY.FREE
              : REGISTER_INPUT_ARR.CATEGORY.NOTICE}
          </Text>
        </div>
        <div className="board__write__title">
          <input
            placeholder={REGISTER_INPUT_ARR.TITLE.content}
            type="text"
            {...control.register("postRequest.postTitle")}
          />
        </div>
        <div className="board__write__content">
          <InputBox
            title={MODIFY_INPUT_ARR.CONTENT.title}
            maxCnt={MODIFY_INPUT_ARR.CONTENT.maxCnt}
            type={MODIFY_INPUT_ARR.CONTENT.type}
            essential={MODIFY_INPUT_ARR.CONTENT.essential}
            name={MODIFY_INPUT_ARR.CONTENT.name}
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
