import { Dropdown } from "@/types/dropdown";
import { useState } from "react";
import styles from "./PostDropdown.module.css";
import PostDropdownContent from "./PostDropdownCotent";
import PostDropdownToggle from "./PostDropdownToggle";

const PostDropdown = ({ item }: Dropdown) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.PostDropdown}>
      <PostDropdownToggle onClick={toggleMenu} />
      {isOpen && <PostDropdownContent item={item} />}
    </div>
  );
};

export default PostDropdown;
