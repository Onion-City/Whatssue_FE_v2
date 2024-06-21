import Iconfileupload from "@/assets/images/ic_file_upload.png";
import { MappingImgItem } from "@/components/atoms/mappingImgItem";
import { Text } from "@/components/atoms/text";
import { InputBox } from "@/components/molecules/inputBox";
import { usePostMutation } from "@/hook/post/usePostMutation";
import { PostFormProps } from "@/types/post";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { REGISTER_INPUT_ARR } from "../constants/constant";
import "./RegisBoard.css";

export const RegisBoard = () => {
  const pathname = usePathname();
  const boardTypeAddress = pathname.split("/board/")[1].split("/")[0];

  const [uploadImages, setUploadImages] = useState<{
    imageFiles: File[];
    imageUrls: string[];
  }>({ imageFiles: [], imageUrls: [] });

  const fileUploadImgStyle: React.CSSProperties = {
    width: "6.3875rem",
    height: "6.3875rem",
  };

  const { control, handleSubmit } = useForm<PostFormProps>({
    mode: "onChange",
  });

  const registePostMutation = usePostMutation();

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    if (uploadImages.imageFiles.length + files.length <= 10) {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setUploadImages({
        imageFiles: [...uploadImages.imageFiles, ...files],
        imageUrls: [...uploadImages.imageUrls, ...newImages],
      });
    } else {
      alert(REGISTER_INPUT_ARR.IMGCONTENT.alert);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = uploadImages.imageFiles.filter(
      (_, idx) => idx !== index
    );
    const updatedUrls = uploadImages.imageUrls.filter(
      (_, idx) => idx !== index
    );
    setUploadImages({ imageFiles: updatedFiles, imageUrls: updatedUrls });
  };

  const onSubmit = (data: PostFormProps) => {
    const postData: PostFormProps = {
      request: {
        ...data.request,
        postCategory: boardTypeAddress === "free" ? "FREE" : "NOTICE",
      },
      clubId: parseInt(pathname.split("/")[1]),
      postImages:
        uploadImages.imageFiles.length > 0
          ? uploadImages.imageFiles
          : undefined,
    };
    registePostMutation.mutate(postData);
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
            {boardTypeAddress === "free"
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
          <div className="board__write__img__upload">
            <label htmlFor="file__input">
              <Image
                src={Iconfileupload}
                alt="imageUpload"
                style={fileUploadImgStyle}
              />
            </label>
            <input
              id="file__input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageInputChange}
              aria-label="file__input"
              style={{ display: "none" }}
            />
          </div>
          <div className="board__write__maping__img__wrapper">
            {uploadImages.imageUrls.map((url, index) => (
              <MappingImgItem
                key={index}
                imgUrl={url}
                index={index}
                onClick={() => handleRemoveImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="board__write__button" onClick={handleSubmit(onSubmit)}>
          <Text color="#2B2B2B" fontSize="0.9375rem" fontWeight="600">
            등록하기
          </Text>
        </div>
      </div>
    </form>
  );
};
