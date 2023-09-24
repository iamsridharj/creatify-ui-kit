import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../lib/components/Buttons';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
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
export const Danger: Story = {
  args: {
    label: 'Danger',
    variant: "danger"
  },
};

export const Secondary: Story = {
  args: {
    label: 'Success',
    variant: "success",
  },
};

export const Transparent: Story = {
  args: {
    label: 'Transparent',
    variant: "transparent",
  },
};

export const Default: Story = {
  args: {
    label: 'Default',
    variant: "default",
  },
};
