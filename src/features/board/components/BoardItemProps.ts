import { StaticImageData } from "next/image";

export interface BoardItemProps {
  boardAddress?: string;
  id: number;
  title: string;
  content: string;
  date: string;
  comment: number;
  hearts: number;
  contentImgs?: StaticImageData[] | undefined;

  isHeart: boolean;
  writer: {
    profile: StaticImageData;
    name: string;
  };
}
