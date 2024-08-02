
export interface BoardItemProps {
  boardAddress?: string;
  id: number;
  title: string;
  content: string;
  commentCount: number;
  hearts: number;
  contentImgs?: string | undefined;
  isHeart: boolean;
  writer: {
    profile: string;
    name: string;
  };
  createdAt: Date;
}
