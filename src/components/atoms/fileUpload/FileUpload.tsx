// import AddPic from "@/assets/images/AddPic.png";
import Image from "next/image";
import { ReactNode, useState } from "react";
import "./FileUpload.css";

export interface FileUploadProps {
  children?: ReactNode;
}

export function FileUpload({ children }: FileUploadProps) {
  interface imageState {
    url?: string;
    name?: string;
  }

  // 이미지
  const [image, setImage] = useState<imageState>();
  const [selectedImageList, setSelectedImageList] = useState<File[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    setSelectedImageList((prev: File[]) => [...prev, file as File]);

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage({ url: reader.result as string, name: file.name });
      });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fileUpload">
      <div className="fileUpload__box">
        {selectedImageList.length === 0 ? (
          <>
            <label htmlFor="first-upload-input">
              <div className="fileUpload__box">
                {/* <Image 
                    src={AddPic} 
                    alt="pic"
                    className="fileUpload__box__img"
                    placeholder="blur"
                    width={115}
                    height={115}
                  /> */}
              </div>
            </label>
            <input
              id="first-upload-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
            />
          </>
        ) : (
          <div>
            <Image
              src={image?.url || ""}
              alt="clubImg"
              className="fileUpload__box__selectedImg"
              width={115}
              height={115}
            />
          </div>
        )}
      </div>
    </div>
  );
}
