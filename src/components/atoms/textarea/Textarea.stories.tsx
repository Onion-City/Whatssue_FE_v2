import { Meta, StoryFn } from "@storybook/react";
import { Textarea, TextareaProps } from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
} as Meta;

const Template: StoryFn<TextareaProps> = (args: any) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};

// export const Right = Template.bind({});
// Right.args = {
//   size: "md",
//   content: "모임 이름을 입력해주세요",
//   backgroundColor: "#2B2B2B", 
//   color: "#fff"
// };