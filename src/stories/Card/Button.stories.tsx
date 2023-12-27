import type { Meta, StoryObj } from '@storybook/react';

import { Card, Image } from '../../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Design System/Display/Card',
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
    children: <><Image imageUrl='https://image-service-sridhar.s3.us-east-1.amazonaws.com/1703618921140.jpeg' enableShadow={false}/></>,
    headerContent: <><h3 style={{padding:"5px", margin: '0px'}}>I am Card header</h3></>,
    footerContent: <><h3 style={{padding:"5px", margin: '0px'}}>I am Card Footer</h3></>,
  },
};