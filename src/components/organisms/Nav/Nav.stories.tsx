import { Meta, StoryFn } from "@storybook/react";
import { Nav, NavProps } from "./Nav";

export default {
  title: "Nav",
  component: Nav,
} as Meta;

const Template: StoryFn<NavProps> = (args: any) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {};