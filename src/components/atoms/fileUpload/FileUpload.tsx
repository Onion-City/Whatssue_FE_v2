"use client";
import AddPic from "@/assets/images/AddPic.png";
import defaultImg from "@/assets/images/img_profile.png";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import "./FileUpload.css";

export interface FileUploadProps {
  children?: ReactNode;
  name?: string;
  field?: ControllerRenderProps<any, any>;
}

export function FileUpload({ children, name, field }: FileUploadProps) {
  // interface imageState {
  //   url?: string;
  //   name?: string;
  // }

  // 이미지 url
  const [image, setImage] = useState<string | undefined>(
    field && 
    field.value && 
    field.value.url ? 
    field.value.url : 
    undefined
  );

  // 이미지 file
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    field && 
    field.value && 
    field.value.imageFile ? 
    field.value.imageFile : 
    undefined
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    setSelectedImage(file as File);

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result as string);
        field?.onChange({
          url: reader.result,
          imageFile: file as File,
        });
      });
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="fileUpload">
        <div className="fileUpload__box">
          {!selectedImage ? (
            <>
              <label htmlFor="first-upload-input">
                <div className="fileUpload__box">
                  <Image 
                    src={AddPic} 
                    alt="pic"
                    className="fileUpload__box__img"
                    placeholder="blur"
                    width={115}
                    height={115}
                  />
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
                src={image ?? defaultImg} 
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