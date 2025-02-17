import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordions from './Accordions';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Accordions',
  component: Accordions,
} as ComponentMeta<typeof Accordions>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Accordions> = (args) => <Accordions {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  title: 'Prospective Students',
  accordionDescription: "The following information is provided to assist you in learning more about our online programs and processes.",
  itemsCollection: [{
    title: "How do online classes work?",
    description: "Stevens offers online courses in a variety of formats. Each course is carefully designed to make the best use of the learning format and contact time. Each online course has its own web portal through our learning management system, Canvas. The site houses all course content and has tools that your instructor may use to assist you in discussions, submitting assignments, accessing textbook resources, etc. Most instructors will use the web conferencing system to conduct live sessions, office hours, Q&A sessions, and exam reviews, among other things."
  },
  {
    title: "How do online classes work?",
    description: "Stevens offers online courses in a variety of formats. Each course is carefully designed to make the best use of the learning format and contact time. Each online course has its own web portal through our learning management system, Canvas. The site houses all course content and has tools that your instructor may use to assist you in discussions, submitting assignments, accessing textbook resources, etc. Most instructors will use the web conferencing system to conduct live sessions, office hours, Q&A sessions, and exam reviews, among other things."
  },]
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  title: 'Click me!',
  accordionDescription: "test"
};