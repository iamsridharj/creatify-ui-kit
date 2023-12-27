import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '../../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Design System/Display/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ImagePreview: Story = {
  args: {
    imageUrl: "https://image-service-sridhar.s3.us-east-1.amazonaws.com/1703618921140.jpeg"
  },
};