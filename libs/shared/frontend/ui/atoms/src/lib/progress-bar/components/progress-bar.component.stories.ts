import { Meta, Story } from '@storybook/angular';

import { RspdProgressBarComponent } from './progress-bar.component';


const Template: Story<RspdProgressBarComponent> = (args) => ({
	template: `<a-rspd-progress-bar [progressInput]='args'></a-rspd-progress-bar>`,
	props: {
		args
	},
});
export const Default = Template.bind({});
Default.args = {};

export default {
	title: 'Atoms/Progress Bar',
	component: RspdProgressBarComponent,
	argTypes: {
		current: {
			control: { type: 'number' }
		},
		total: {
			control: { type: 'number' }
		},
		isCompleted: {control: { type: 'boolean'}}
	},
	args: {
		current: 5,
		total: 7,
		isCompleted: false
	},
} as Meta;
