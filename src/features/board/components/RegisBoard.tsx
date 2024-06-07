import Iconfileupload from "@/assets/images/ic_file_upload.png";
import { MappingImgItem } from "@/components/atoms/mappingImgItem";
import { Text } from "@/components/atoms/text";
import { BoardCategoryType, useCreateBoard } from "@/hook/board/useCreateBoard";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { REGIS_TEXT } from "../constants/constant";
import "./RegisBoard.css";
export const RegisBoard = () => {
  const { mutate: createPost } = useCreateBoard();
  const pathname = usePathname();
  const boardTypeAddress = pathname.split("/board/")[1].split("/")[0]; //free | notic
  const [isInputTitle, setIsInputTitle] = useState<string>("");
  const [isInputContent, setIsInputContent] = useState<string>("");
  const [uploadImages, setUploadImages] = useState<{
    imageFiles: File[];
    imageUrls: string[];
  }>({ imageFiles: [], imageUrls: [] });
  const fileUploadImgStyle: React.CSSProperties = {
    width: "6.3875rem",
    height: "6.3875rem",
  };

  const handleOnChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsInputTitle(e.target.value);
  };
  const handleOnChangeInputContent = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIsInputContent(e.target.value);
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return; // a
    const files = e.target.files;
    const fileArray = Array.from(files); //b
    if (uploadImages.imageFiles.length + fileArray.length <= 10) {
      const newImages = Array.from(files, (file) => URL.createObjectURL(file));
      setUploadImages({
        imageFiles: [...uploadImages.imageFiles, ...fileArray],
        imageUrls: [...uploadImages.imageUrls, ...newImages],
      });
    } else {
      alert("이미지는 최대 10장까지 첨부할 수 있습니다.");
    }
  };

  const handleRemoveImage = (id: number) => {
    setUploadImages({
      imageFiles: uploadImages.imageFiles.filter((_, index) => index !== id),
      imageUrls: uploadImages.imageUrls.filter((_, index) => index !== id),
    });
  };

  const handleSubmit = () => {
    createPost({
      clubId: 1,
      memberId: 3,
      postData: {
        request: {
          postTitle: isInputTitle,
          postContent: isInputContent,
          postCategory:
            boardTypeAddress === "free"
              ? BoardCategoryType.FREE
              : BoardCategoryType.NOTICE,
        },
        postImages: uploadImages.imageUrls,
      },
    });
  };

  return (
    <section className="board__write__wrapper">
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
            onChange={handleOnChangeInputTitle}
            value={isInputTitle || ""}
          />
        </div>
        <div className="board__write__content">
          <textarea
            placeholder={REGIS_TEXT.CONTENT}
            onChange={handleOnChangeInputContent}
            value={isInputContent || ""}
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
        <div className="board__write__button" onClick={handleSubmit}>
          <Text color="#2B2B2B" fontSize="0.9375rem" fontWeight="600">
            등록하기
          </Text>
        </div>
      </div>
    </section>
  );
};
