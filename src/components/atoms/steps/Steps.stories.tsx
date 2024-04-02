import { Meta, StoryFn } from "@storybook/react";
import { Step, StepProps } from "./Steps";

export default {
  title: "Step",
  component: Step,
} as Meta;

const Template: StoryFn<StepProps> = (args: any) => <Step {...args} />;

export const Default = Template.bind({});
Default.args = {};