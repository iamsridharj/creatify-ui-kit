import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Design System/General/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant:{
  
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    children: 'Default',
    variant: "default",
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: "danger"
  },
};

export const Secondary: Story = {
  args: {
    children: 'Success',
    variant: "success",
  },
};

export const Transparent: Story = {
  args: {
    children: 'Transparent',
    variant: "transparent",
  },
};


