import type { Meta, StoryObj } from '@storybook/angular';

import { VcLabelComponent } from './label.component';

const meta: Meta<VcLabelComponent> = {
  title: 'Foundations/Label',
  component: VcLabelComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Label simples para inputs e campos.\n\n' +
          'Uso:\n' +
          '`<vc-label text="Nome" [required]="true"></vc-label>`'
      }
    }
  },
  args: {
    text: 'Nome completo',
    required: false
  },
  argTypes: {
    text: { control: 'text', description: 'Texto principal do label.' },
    required: { control: 'boolean', description: 'Exibe indicador de obrigatorio.' },
    forId: { control: 'text', description: 'Id do input associado.' }
  }
};

export default meta;

type Story = StoryObj<VcLabelComponent>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    text: 'Email',
    required: true
  }
};
