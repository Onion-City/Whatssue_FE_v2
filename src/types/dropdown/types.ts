
interface DropdownStruct {
  text: string;
  onClick?: () => void;
}
export interface Dropdown {
  item: DropdownStruct[];
}
