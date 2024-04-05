import { Meta, StoryFn } from "@storybook/react";
import { InputBox, InputBoxProps } from "./InputBox";

export default {
  title: "InputBox",
  component: InputBox,
} as Meta;

const Template: StoryFn<InputBoxProps> = (args: any) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {};