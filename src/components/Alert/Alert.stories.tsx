import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: "You message has been printed successfully!",
};

export const Secondary = Template.bind({});
Secondary.args = {
  message: "You message has been printed successfully!",
  variant: "secondary",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  message: "You message has been printed successfully!",
  size: "xlarge",
};

export const Error = Template.bind({});
Error.args = {
  message: "Sothing went wrong!",
  variant: "danger",
};

export const Success = Template.bind({});
Success.args = {
  message: "Your message has been sent!",
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Your account will be deactivated",
  variant: "warning",
};
