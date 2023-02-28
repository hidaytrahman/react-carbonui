import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  placeholder: "Enter your name",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  placeholder: "Enter your name",
  fullWidth: true,
};

export const XLarge = Template.bind({});
XLarge.args = {
  placeholder: "Enter your name",
  scale: "xlarge",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Enter your name",
  scale: "large",
  variant: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Enter your name",
  scale: "small",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Passowrd",
  type: "password",
};

export const Date = Template.bind({});
Date.args = {
  placeholder: "Date",
  type: "date",
};

export const Url = Template.bind({});
Url.args = {
  placeholder: "Number",
  type: "number",
};
