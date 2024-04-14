import { Meta, StoryFn } from "@storybook/react";
import { Floating, FloatingProps } from "./Floating";

export default {
  title: "Floating",
  component: Floating,
} as Meta;

const Template: StoryFn<FloatingProps> = (args: any) => <Floating {...args}></Floating>;

export const Default = Template.bind({});
Default.args = {};

