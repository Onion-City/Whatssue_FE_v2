import { Text } from "@/components/atoms/text";
import { Dropdown } from "@/types/dropdown";
import React from "react";
import styles from "./PostDropdown.module.css";

const PostDropdownContent = ({ item }: Dropdown) => {
  return (
    <div className={styles.PostDropdownContentWrapper}>
      {item.map((item, index) => (
        <React.Fragment key={index}>
          <div className={styles.PostDropdownContent} onClick={item.onClick}>
            <Text color={item.color} fontSize="0.63981rem" fontWeight="600">
              {item.text}
            </Text>
          </div>
          <div className={styles.PostDropdownContentUnderLine} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostDropdownContent;
