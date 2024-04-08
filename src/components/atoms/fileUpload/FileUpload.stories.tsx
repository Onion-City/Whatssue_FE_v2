import { Meta, StoryFn } from "@storybook/react";
import { FileUpload, FileUploadProps } from "./FileUpload";

export default {
  title: "FileUpload",
  component: FileUpload,
} as Meta;

const Template: StoryFn<FileUploadProps> = (args: any) => <FileUpload {...args}></FileUpload>;

export const Default = Template.bind({});
Default.args = {};