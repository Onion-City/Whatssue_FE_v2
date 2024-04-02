import { Meta, StoryFn } from "@storybook/react";
import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
} as Meta;

const Template: StoryFn<ToggleProps> = (args: any) => <Toggle {...args}></Toggle>;

export const Default = Template.bind({});
Default.args = {};

export const Gray = Template.bind({});
Gray.args = {
  size: "md",
  backgroundColor: "#404040",
  color: "#ffffff",
};
