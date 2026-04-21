import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { VcInputComponent } from './input.component';

const meta: Meta<VcInputComponent> = {
  title: 'Forms/Input',
  component: VcInputComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de texto com label, hint e estados de erro. Implementa ControlValueAccessor para uso com forms.\n\n' +
          'Uso:\n' +
          '`<vc-input label="Nome" placeholder="Digite" required></vc-input>`'
      }
    }
  },
  args: {
    id: 'vc-input-story',
    label: 'Nome completo',
    placeholder: 'Ex: Maria Silva',
    type: 'text',
    hint: 'Digite como aparece no documento',
    required: false,
    mask: ''
  },
  argTypes: {
    id: { control: 'text', description: 'Id do input e do label.' },
    label: { control: 'text', description: 'Texto exibido no label.' },
    placeholder: { control: 'text', description: 'Placeholder do input.' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'number', 'date'],
      description: 'Tipo do input.'
    },
    mask: {
      control: 'select',
      options: ['', 'phone', 'email', 'date', 'password'],
      description: 'Mascara aplicada ao valor digitado.'
    },
    hint: { control: 'text', description: 'Texto auxiliar exibido abaixo.' },
    error: { control: 'text', description: 'Mensagem de erro (ativa estado invalido).' },
    required: { control: 'boolean', description: 'Exibe indicador de obrigatorio.' }
  }
};

export default meta;

type Story = StoryObj<VcInputComponent>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: 'Nome completo' });

    await userEvent.clear(input);
    await userEvent.type(input, 'Maria Silva');
    await expect(input).toHaveValue('Maria Silva');
  }
};

export const Error: Story = {
  args: {
    label: 'Email',
    type: 'email',
    error: 'Email invalido'
  }
};

export const PhoneMask: Story = {
  args: {
    id: 'vc-input-phone-story',
    label: 'Telefone',
    type: 'tel',
    placeholder: '(11) 99999-0000',
    mask: 'phone'
  },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: 'Telefone' });

    await userEvent.clear(input);
    await userEvent.type(input, '11987654321');
    await expect(input).toHaveValue('(11) 98765-4321');
  }
};

export const DateMask: Story = {
  args: {
    label: 'Data',
    placeholder: 'dd/mm/aaaa',
    mask: 'date'
  }
};
