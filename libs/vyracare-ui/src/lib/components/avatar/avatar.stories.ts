import type { Meta, StoryObj } from '@storybook/angular';

import { VcAvatarComponent } from './avatar.component';

const meta: Meta<VcAvatarComponent> = {
  title: 'Components/Avatar',
  component: VcAvatarComponent,
  tags: ['autodocs'],
  args: {
    initials: 'VC',
    name: 'Vyra Care'
  }
};

export default meta;

type Story = StoryObj<VcAvatarComponent>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80'
  }
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:16px;">
        <vc-avatar initials="VC" size="sm"></vc-avatar>
        <vc-avatar initials="VC" size="md"></vc-avatar>
        <vc-avatar initials="VC" size="lg"></vc-avatar>
        <vc-avatar initials="VC" size="xl"></vc-avatar>
      </div>
    `
  })
};
