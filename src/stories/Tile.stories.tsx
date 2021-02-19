import React, { FC, Fragment } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { range } from 'fp-ts/Array'

import { Tile, TileProps } from 'components/Tile';

export default {
  title: 'CC/Tile',
  component: Tile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const DisplayColumn: FC = ({ children }) => (
  <div className="flex flex-col gap-4">
    {children}
  </div>
)


const Template:     Story<TileProps> = (args) => <Tile {...args} />;
const ListTemplate: Story<TileProps> = args => (
  <DisplayColumn>
    <Fragment>
      {range(1,24).map(i => (<Tile key={i} {...args}>{i}</Tile>))}
    </Fragment>
  </DisplayColumn>
);

export const Basic = Template.bind({});
Basic.args = {
  primary: true,
  label: 'Tile',
};

export const TileList = ListTemplate.bind({});
TileList.args = {

}