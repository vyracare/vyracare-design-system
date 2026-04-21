import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { VcSelectComponent } from './select.component';

const meta: Meta<VcSelectComponent> = {
  title: 'Forms/Select',
  component: VcSelectComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Select com label, hint e estado de erro. Ideal para listas curtas de opcoes.\n\n' +
          'Uso:\n' +
          '`<vc-select [options]="options" label="Especialidade"></vc-select>`'
      }
    }
  },
  args: {
    id: 'vc-select-story',
    label: 'Especialidade',
    placeholder: 'Selecione',
    options: [
      { label: 'Cardiologia', value: 'cardio' },
      { label: 'Pediatria', value: 'pediatria' },
      { label: 'Clinica geral', value: 'clinica' }
    ]
  },
  argTypes: {
    label: { control: 'text', description: 'Texto exibido no label.' },
    placeholder: { control: 'text', description: 'Texto do placeholder inicial.' },
    hint: { control: 'text', description: 'Texto auxiliar exibido abaixo.' },
    error: { control: 'text', description: 'Mensagem de erro (ativa estado invalido).' },
    required: { control: 'boolean', description: 'Marca o campo como obrigatorio.' },
    options: { control: 'object', description: 'Lista de opcoes com label e value.' }
  }
};

export default meta;

type Story = StoryObj<VcSelectComponent>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const select = canvas.getByRole('combobox', { name: 'Especialidade' });

    await userEvent.selectOptions(select, 'pediatria');
    await expect(select).toHaveValue('pediatria');
  }
};

export const Error: Story = {
  args: {
    error: 'Selecione uma especialidade'
  }
};
