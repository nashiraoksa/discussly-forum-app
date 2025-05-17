import React from 'react';
import InputGeneral from '../components/general/InputGeneral';

const stories = {
  title: 'InputGeneral',
  component: InputGeneral,
  tags: ['autodocs'],
};

export default stories;

const TemplateStory = (args) => <InputGeneral {...args} />;

const InputEmail = TemplateStory.bind({});
InputEmail.args = {
  type: 'email',
  placeholder: 'Email',
};

const InputPassword = TemplateStory.bind({});
InputPassword.args = {
  type: 'password',
  placeholder: 'Password',
};

InputEmail.parameters = {
  backgrounds: { default: 'light' },
};
InputPassword.parameters = {
  backgrounds: { default: 'light' },
};

export { InputEmail, InputPassword };
