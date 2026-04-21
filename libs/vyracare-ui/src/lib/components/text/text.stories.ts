import type { Meta, StoryObj } from '@storybook/angular';

import { VcTextComponent } from './text.component';

const meta: Meta<VcTextComponent> = {
  title: 'Fundations/Text',
  component: VcTextComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Texto base para descricoes e mensagens auxiliares.\n\n' +
          'Uso:\n' +
          '`<vc-text size="md" [muted]="false">Texto</vc-text>`'
      }
    }
  },
  args: {
    size: 'md',
    muted: false
  },
  render: (args) => ({
    props: args,
    template: '<vc-text [size]="size" [muted]="muted">Texto base para descricoes e instrucoes.</vc-text>'
  }),
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do texto.'
    },
    muted: {
      control: 'boolean',
      description: 'Aplica cor mais suave.'
    }
  }
};

export default meta;

type Story = StoryObj<VcTextComponent>;

export const Default: Story = {};
export const Muted: Story = { args: { muted: true } };
export const Large: Story = { args: { size: 'lg' } };
