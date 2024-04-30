import Iconfileupload from "@/assets/images/ic_file_upload.png";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./RegisBoard.css";
export const RegisBoard = () => {
  const pathname = usePathname();
  const boardTypeAddress = pathname.split("/board/")[1].split("/")[0];
  console.log(boardTypeAddress); //해당으로 글쓰기 타겟팅
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

    //c
    const newImages = Array.from(files, (file) => URL.createObjectURL(file));
    setUploadImages({
      imageFiles: [...uploadImages.imageFiles, ...fileArray],
      imageUrls: [...uploadImages.imageUrls, ...newImages],
    });
  };

  const handleRemoveImage = (id: number) => {
    setUploadImages({
      imageFiles: uploadImages.imageFiles.filter((_, index) => index !== id),
      imageUrls: uploadImages.imageUrls.filter((_, index) => index !== id),
    });
  };
  return (
    <div className="board__write__wrapper">
      <div className="board__write__title">
        <input
          placeholder="제목"
          type="text"
          onChange={handleOnChangeInputTitle}
          value={isInputTitle || ""}
        />
      </div>
      <div className="board__write__content">
        <textarea
          placeholder="내용을 입력하세요."
          onChange={handleOnChangeInputContent}
          value={isInputContent || ""}
        />
      </div>
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
            <div className="board__write__maping__img" key={index}>
              <Image
                src={url}
                alt={`board__write__maping__img__${index}`}
                width={6.3875 * 16} // 1rem = 16px
                height={6.3875 * 16} // 1rem = 16px
              />
              <div
                className="board__write__maping__img__remove"
                onClick={() => handleRemoveImage(index)}
              >
                <Image src={ICONS.floatingPlus} alt="X" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
