import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;

const Template: StoryFn<CheckboxProps> = (args: any) => <Checkbox {...args}></Checkbox>;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true
};
