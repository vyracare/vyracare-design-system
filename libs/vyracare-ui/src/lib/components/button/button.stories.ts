import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { VcButtonComponent } from './button.component';

const meta: Meta<VcButtonComponent> = {
  title: 'Components/Button',
  component: VcButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Botao de acao com variantes primaria, secundaria, terciaria e ghost.\n\n' +
          'Uso:\n' +
          '`<vc-button variant="primary" size="md">Salvar</vc-button>`'
      }
    }
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-button
        [variant]="variant"
        [size]="size"
        [loading]="loading"
        [disabled]="disabled"
        [type]="type"
      >Cadastrar</vc-button>
    `
  }),
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      description: 'Estilo visual do botao.'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botao.'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Tipo do elemento button.'
    },
    loading: {
      control: 'boolean',
      description: 'Exibe spinner e desativa o botao.'
    },
    disabled: {
      control: 'boolean',
      description: 'Desativa o botao.'
    }
  }
};

export default meta;

type Story = StoryObj<VcButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    type: 'button'
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Cadastrar' });

    await expect(button).toBeEnabled();
    await userEvent.click(button);
    await expect(button).toHaveTextContent('Cadastrar');
  }
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    disabled: false,
    type: 'button'
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Cadastrar' });

    await expect(button).toBeDisabled();
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    loading: false,
    disabled: false,
    type: 'button'
  }
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'md',
    loading: false,
    disabled: false,
    type: 'button'
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    loading: false,
    disabled: false,
    type: 'button'
  }
};
