import { Meta, StoryFn } from "@storybook/react";
import { HomeCalendar, HomeCalendarProps } from "./Calendar";

export default {
  title: "Calendar",
  component: HomeCalendar,
} as Meta;

const Template: StoryFn<HomeCalendarProps> = (args: any) => <HomeCalendar {...args}></HomeCalendar>;

export const Default = Template.bind({});
Default.args = {};