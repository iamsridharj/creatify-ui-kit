import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Design System/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TabsPreview: Story = {
  args: {
    tabs: [{title: "Title 1", identifier: "title-1"}, {title: "Title 2", identifier: "title-2"}, {title: "Title 3", identifier: "title-3"}],
    defaultActiveTab: "title-1"
  },
};

export const TwoTabsPreview: Story = {
    args: {
      tabs: [{title: "Title 1", identifier: "title-1"}, {title: "Title 2", identifier: "title-2"}],
      defaultActiveTab: "title-1"
    },
  };

export const MultiTabsPreviewYetToFix: Story = {
    args: {
        tabs: [{title: "Title 1", identifier: "title-1"}, {title: "Title 2", identifier: "title-2"},{title: "Title 3", identifier: "title-3"}, {title: "Title 4", identifier: "title-4"},{title: "Title 5", identifier: "title-5"}, {title: "Title 6", identifier: "title-6"}],
        defaultActiveTab: "title-1",
        tabContainerProps:{
            style:{
                width: "500px"
            }
        },
        tabProps:{
            style:{
                width: "250px"
            }
        }
    },
};