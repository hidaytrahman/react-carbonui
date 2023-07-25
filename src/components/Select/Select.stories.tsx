import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from './Select';

export default {
	title: 'Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
	<Select {...args}>
		<option>Default</option>
		<option>English</option>
		<option>Hindi</option>
	</Select>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
	variant: 'secondary',
};

export const Multiple = Template.bind({});
Multiple.args = {
	multiple: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	fullWidth: true,
};

export const Large = Template.bind({});
Large.args = {
	scale: 'large',
};
