/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BaseStorybookDecorator } from '@base/features/base-decorator';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorPage, Props as ErrorPageProps } from './index';

export default {
	title: 'Design System/Containers/ErrorPage',
	component: (props: ErrorPageProps) => (<ErrorPage {...props as any} />),
	argTypes: {

	},
	decorators: [BaseStorybookDecorator],
	parameters: { docs: { source: { type: 'dynamic', excludeDecorators: true } } }
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => {
	const ErrorPageContainer = baseConnect<any, any, ErrorPageProps>(
		ErrorPage,
		() => ({
			...args
		})
	);

	return <ErrorPageContainer {...args} />;
};

export const Default = Template.bind({});
Default.args = {

} as ErrorPageProps;
