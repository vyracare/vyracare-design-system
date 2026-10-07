import type { Meta, StoryObj } from '@storybook/angular';

import { VcTextareaComponent } from './textarea.component';

const meta: Meta<VcTextareaComponent> = {
  title: 'Forms/Textarea',
  component: VcTextareaComponent,
  tags: ['autodocs'],
  args: {
    id: 'vc-textarea-story',
    label: 'Observacoes clinicas',
    placeholder: 'Descreva as informacoes relevantes',
    rows: 4,
    required: false
  }
};

export default meta;
type Story = StoryObj<VcTextareaComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    required: true,
    error: 'Informe as observacoes clinicas.'
  }
};
