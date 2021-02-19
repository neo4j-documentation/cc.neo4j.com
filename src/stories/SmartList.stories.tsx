import React from 'react';
import { range } from 'fp-ts/Array';

import {CellProps} from 'react-table';

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SmartList, SmartListProps } from '../components/SmartList';

import {TextPlaceholder} from './TextPlaceholder';

export const ItemPlaceholder:React.FC<CellProps<any>> = ({value}) => <TextPlaceholder text={value}/>

export default {
  title: 'CC/SmartList',
  component: SmartList,
} as Meta;

const Template: Story<SmartListProps> = (args) => <SmartList renderItem={ItemPlaceholder} {...args} />;

export const EmptyStream = Template.bind({});
EmptyStream.args = {
  items: []
};

export const SingleTextItem = Template.bind({});
SingleTextItem.args = {
  items: ["Hello"]
};
SingleTextItem.argTypes = {
  renderItem: { table: { disable: true } },
};
export const TwoTextItems = Template.bind({});
TwoTextItems.args = {
  items: range(1,2)
};


export const ThreeTextItems = Template.bind({});
ThreeTextItems.args = {
  items: range(1,3)
};


export const HundredTextItems = Template.bind({});
HundredTextItems.args = {
  items: range(1,100)
};

