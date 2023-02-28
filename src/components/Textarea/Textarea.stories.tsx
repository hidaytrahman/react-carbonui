import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Text = Template.bind({});
Text.args = {
  placeholder: "Enter your message",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  placeholder: "Enter your message",
  fullWidth: true,
};

export const XLarge = Template.bind({});
XLarge.args = {
  placeholder: "Enter your message",
  scale: "xlarge",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Enter your message",
  scale: "large",
  variant: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Enter your message",
  scale: "small",
};
