import { Meta, StoryFn } from "@storybook/react";
import { HistoryHeader } from "./HistoryHeader";

export default {
  title: "HistoryHeader",
  component: HistoryHeader,
} as Meta;

const Template: StoryFn = (args: any) => <HistoryHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};