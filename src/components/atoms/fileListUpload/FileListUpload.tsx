import Iconfileupload from "@/assets/images/ic_file_upload.png";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import { ChangeEvent } from "react";
import "./FileListUpload.css";
interface MappingImgItemProps {
  itemArr: string[];
  onClick: (index: number) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FileListUpload = ({
  itemArr,
  onClick,
  onChange,
}: MappingImgItemProps) => {
  return (
    <>
      <div className="file__list__upload__icon">
        <label htmlFor="file__input">
          <Image src={Iconfileupload} alt="imageUpload" />
        </label>
        <input
          id="file__input"
          type="file"
          accept="image/*"
          multiple
          onChange={onChange}
          aria-label="file__input"
          style={{ display: "none" }}
        />
      </div>
      <div className="file__list__upload__img__list">
        {itemArr.map((imgUrl: string, index: number) => (
          <div className="file__list__upload__img" key={index}>
            <Image
              src={imgUrl}
              alt={`mapping__img__item__img__${index}`}
              width={50}
              height={50}
            />
            <div
              className="file__list__upload__img__remove"
              onClick={() => onClick(index)}
            >
              <Image
                src={ICONS.floatingPlus}
                alt="Remove"
                width={20}
                height={20}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
