import type { Meta, StoryObj } from '@storybook/angular';

import { VcDateComponent } from './date.component';

const meta: Meta<VcDateComponent> = {
  title: 'Form/Date',
  component: VcDateComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de data com mascara dd/mm/aaaa e opcao de icone.\n\n' +
          'Uso:\n' +
          '`<vc-date label="Data" placeholder="dd/mm/aaaa"></vc-date>`'
      }
    }
  },
  args: {
    label: 'Data de nascimento',
    placeholder: 'dd/mm/aaaa'
  },
  argTypes: {
    label: { control: 'text', description: 'Texto exibido no label.' },
    placeholder: { control: 'text', description: 'Placeholder do campo.' },
    hint: { control: 'text', description: 'Texto auxiliar exibido abaixo.' },
    error: { control: 'text', description: 'Mensagem de erro (ativa estado invalido).' },
    required: { control: 'boolean', description: 'Exibe indicador de obrigatorio.' },
    icon: { control: 'text', description: 'Icone exibido no campo.' },
    showIcon: { control: 'boolean', description: 'Exibe o icone lateral.' }
  }
};

export default meta;

type Story = StoryObj<VcDateComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: 'Data invalida'
  }
};
