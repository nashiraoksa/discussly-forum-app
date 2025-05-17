import React from 'react';
import ButtonGeneral from '../components/general/ButtonGeneral';
import { FaPencilAlt } from 'react-icons/fa';

const stories = {
  title: 'ButtonGeneral',
  component: ButtonGeneral,
  tags: ['autodocs'],
};

export default stories;

const TemplateStory = (args) => <ButtonGeneral {...args} />;

const PrimaryButton = TemplateStory.bind({});
PrimaryButton.args = {
  text: 'Primary Button',
  type: 'primary',
  rounded: 'lg',
};

const SecondaryButton = TemplateStory.bind({});
SecondaryButton.args = {
  text: 'Secondary Button',
  type: 'secondary',
  rounded: 'lg',
};

const PrimaryButtonWithIcon = TemplateStory.bind({});
PrimaryButtonWithIcon.args = {
  text: 'Primary Button',
  type: 'primary',
  rounded: 'lg',
  icon: <FaPencilAlt />,
};
export { PrimaryButton, SecondaryButton, PrimaryButtonWithIcon };
