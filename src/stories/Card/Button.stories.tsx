import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    enableShadow:{
      control: 'boolean',
    }
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const CardPreview: Story = {
  args: {
    bodyContent: <><h3>Body Node</h3></>,
    headerContent: <><h3 style={{padding:"5px", margin: '0px'}}>Header Node</h3></>,
    footerContent: <><h3 style={{padding:"5px", margin: '0px'}}>Footer Node</h3></>,
  },
};