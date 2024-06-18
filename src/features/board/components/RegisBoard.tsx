import Iconfileupload from "@/assets/images/ic_file_upload.png";
import { MappingImgItem } from "@/components/atoms/mappingImgItem";
import { Text } from "@/components/atoms/text";
import { usePostMutation } from "@/hook/post/usePostMutation";
import { PostFormProps } from "@/types/post";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { REGIS_TEXT } from "../constants/constant";
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
    mode: "onChange", // Form validation mode
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
      alert("이미지는 최대 10장까지 첨부할 수 있습니다.");
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
      ...data,
      request: {
        ...data.request,
        postCategory: boardTypeAddress === "free" ? "FREE" : "NOTICE",
      },
      clubId: parseInt(pathname.split("/")[1]),
    };
    registePostMutation.mutate(postData);
  };

  return (
    <form className="board__write__wrapper" onSubmit={handleSubmit(onSubmit)}>
      <>
        <div className="board__write__type">
          <Text color="#989898" fontSize="0.8125rem" fontWeight="500">
            {REGIS_TEXT.CATEGORY}
          </Text>
          <Text
            color="#fff"
            fontSize="0.8125rem"
            fontWeight="600"
            className="board__write__type__margin"
          >
            {boardTypeAddress === "free" ? REGIS_TEXT.FREE : REGIS_TEXT.NOTICE}
          </Text>
        </div>
        <div className="board__write__title">
          <input
            placeholder={REGIS_TEXT.TITLE}
            type="text"
            {...control.register("request.postTitle")} // Register field with react-hook-form
          />
        </div>
        <div className="board__write__content">
          <textarea
            placeholder={REGIS_TEXT.CONTENT}
            {...control.register("request.postContent")} // Register field with react-hook-form
          />
        </div>
      </>

      <div className="board__write__bottom">
        <Text color="#fff" fontSize="1.0625rem" fontWeight="600">
          사진 첨부하기 (최대 10개)
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
