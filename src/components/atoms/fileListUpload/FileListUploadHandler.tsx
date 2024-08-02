"use client";
import { REGISTER_INPUT_ARR } from "@/features/board/constants/constant";
import { PostFormDatas } from "@/types/post";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";

interface FileListUploadProps {
  setValue: UseFormSetValue<PostFormDatas>;
}
export const FileListUploadHandler = ({ setValue }: FileListUploadProps) => {
  const [uploadImgFiles, setUploadImgFiles] = useState<File[]>([]);
  const [uploadImgUrls, setUploadImgUrls] = useState<string[]>([]);

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
  };
  return {
    handleImageInputChange,
    handleRemoveImage,
    uploadImgFiles,
    uploadImgUrls,
  };
};
