import { Meta, StoryFn } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
  title: "Text",
  component: Text,
} as Meta;

const content = "모임 이름";
const Template: StoryFn<TextProps> = (args: any) => <Text {...args}>{content}</Text>;

export const Default = Template.bind({});
Default.args = {};