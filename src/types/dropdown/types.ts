
interface DropdownStruct {
  text: string;
  color?: string;
  onClick?: () => void;
}
export interface Dropdown {
  item: DropdownStruct[];
}
