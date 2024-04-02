import { Meta, StoryFn } from "@storybook/react";
import { Chip, ChipProps } from "./Chip";

export default {
  title: "Chip",
  component: Chip,
} as Meta;

const content = "실명제";
const Template: StoryFn<ChipProps> = (args: any) => <Chip {...args}>{content}</Chip>;

export const Default = Template.bind({});
Default.args = {};