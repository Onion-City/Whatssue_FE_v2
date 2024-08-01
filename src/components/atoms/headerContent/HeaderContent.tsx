import { Text } from "../text";
import "./HeaderContent.css";

interface HeaderContentProps {
  content?: string;
  title?: string;
  subTitle?: string;
}

export function HeaderContent({
  content,
  title,
  subTitle,
}: HeaderContentProps) {
  return (
    <div className="header__content__wrapper">
      {content ? (
        <Text color="#989898" fontSize="0.9375rem" fontWeight="600">
          {content}
        </Text>
      ) : (
        <div className="header__content__title">
          <Text color="#FFF" fontSize="1.0625rem" fontWeight="600">
            {title}
          </Text>
          <Text color="#828282" fontSize="0.75rem" fontWeight="600">
            {subTitle}
          </Text>
        </div>
      )}
    </div>
  );
}
