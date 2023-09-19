import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
	title: 'Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	title: 'Basic Modal',
	isOpen: true,
	onConfirm: () => {
		alert('done');
	},
	children: (
		<>
			<h2>Basic Modal </h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel lorem vestibulum, ullamcorper
				urna id, interdum est. Vestibulum tempus neque vitae tempus porttitor. Nunc ut semper nisi, id
				condimentum tellus. Vivamus eget mattis mauris, ut placerat nibh. Aliquam pharetra nisl erat, vitae
				porttitor erat mattis ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Pellentesque eget feugiat sem. Nulla ut orci sit amet dolor dignissim ultrices venenatis
				et nulla. Proin sodales justo eu mauris scelerisque feugiat. Nunc eu magna pulvinar, convallis orci sit
				amet, mollis dolor.
			</p>
		</>
	),
};

export const ConfirmModal = Template.bind({});
ConfirmModal.args = {
	title: 'Are you sure ?',
	isOpen: true,
	onConfirm: () => {
		alert('done');
	},
	confirmTitle: 'Yes',
	cancelTitle: 'No',
	children: (
		<>
			<p>Are you sure you want to delete this item? This action cannot be undone. </p>
		</>
	),
};

export const AlertModal = Template.bind({});
AlertModal.args = {
	title: 'Attention Required',
	isOpen: true,
	onConfirm: () => {
		// your code
	},
	confirmTitle: 'Ok',
	children: (
		<>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Nulla facilisi. Phasellus auctor, justo eu euismod sollicitudin.</li>
				<li>Integer auctor libero et lectus lacinia, vel facilisis orci bibendum.</li>
			</ul>
		</>
	),
};

export const InfoModal = Template.bind({});
InfoModal.args = {
	title: 'Read Guidelines',
	isOpen: true,
	onConfirm: () => {
		// your code
	},
	confirmTitle: 'Okay!',
	hasCloseButton: true,
	children: (
		<>
			<p>Feel free to customize the content, title, and buttons to suit your specific needs.</p>
		</>
	),
};
