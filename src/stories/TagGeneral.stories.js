import React from 'react';
import TagGeneral from '../components/general/TagGeneral';

const stories = {
  title: 'TagGeneral',
  component: TagGeneral,
  tags: ['autodocs'],
};

export default stories;

const TemplateStory = (args) => <TagGeneral {...args} />;

const UnselectedTag = TemplateStory.bind({});
UnselectedTag.args = {
  text: 'Tag Text',
  selected: false,
};

const SelectedTag = TemplateStory.bind({});
SelectedTag.args = {
  text: 'Tag Text',
  selected: true,
};

UnselectedTag.parameters = {
  backgrounds: { default: 'light' },
};
SelectedTag.parameters = {
  backgrounds: { default: 'light' },
};

export { UnselectedTag, SelectedTag };
