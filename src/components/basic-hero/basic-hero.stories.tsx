import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BasicHero from './basic-hero';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/BasicHero',
  component: BasicHero,
} as ComponentMeta<typeof BasicHero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasicHero> = (args) => <BasicHero {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  title: 'Click me!',
};