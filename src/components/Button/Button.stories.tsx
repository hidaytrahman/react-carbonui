import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  onClick: () => {
    alert("clicked");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variant: "secondary",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Click me!",
  size: "xlarge",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Click me!",
  disabled: true,
};

export const SizeXSmall = Template.bind({});
SizeXSmall.args = {
  label: "Click me!",
  size: "xsmall",
};

export const Link = Template.bind({});
Link.args = {
  label: "Click me!",
  variant: "link",
};
