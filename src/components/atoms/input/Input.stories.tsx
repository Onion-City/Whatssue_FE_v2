import { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args: any) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Right = Template.bind({});
Right.args = {
  size: "md",
  content: "모임 이름을 입력해주세요",
  backgroundColor: "#2B2B2B", 
  color: "#fff"
};