import { Text } from "@/components/atoms/text";
import { Dropdown } from "@/types/dropdown";
import styles from "./PostDropdown.module.css";

const PostDropdownContent = ({ item }: Dropdown) => {
  return (
    <div className={styles.PostDropdownContentWrapper}>
      {item.map((item, index) => (
        <div
          key={index}
          className={styles.PostDropdownContent}
          onClick={item.onClick}
        >
          <Text color="#fff" fontSize="1rem" fontWeight="300">
            {item.text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default PostDropdownContent;
