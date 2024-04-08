import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args: any) => <Button {...args}></Button>;

export const Default = Template.bind({});
Default.args = {};

export const Gray = Template.bind({});
Gray.args = {
  size: "md",
  backgroundColor: "#404040",
  color: "#ffffff",
};
