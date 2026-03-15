import type { Meta, StoryObj } from '@storybook/angular';

import { VcCardButtonComponent } from './card-button.component';

const meta: Meta<VcCardButtonComponent> = {
  title: 'Components/Card Button',
  component: VcCardButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card clicavel com badge e acao lateral. Pode ser botao ou link.\n\n' +
          'Uso:\n' +
          '`<vc-card-button title="Cadastro" subtitle="Prontuarios" icon="people"></vc-card-button>`'
      }
    }
  },
  args: {
    title: 'Cadastro de pacientes',
    subtitle: 'Prontuarios e historico clinico',
    icon: 'people',
    showIcon: true,
    showAction: true,
    actionIcon: 'chevron-right'
  },
  argTypes: {
    title: { control: 'text', description: 'Titulo principal do card.' },
    subtitle: { control: 'text', description: 'Texto auxiliar abaixo do titulo.' },
    icon: { control: 'text', description: 'Icone do badge.' },
    badgeText: { control: 'text', description: 'Texto no badge quando sem icone.' },
    showIcon: { control: 'boolean', description: 'Exibe o badge lateral.' },
    showAction: { control: 'boolean', description: 'Exibe o botao de acao.' },
    actionIcon: { control: 'text', description: 'Icone do botao de acao.' },
    href: { control: 'text', description: 'Transforma em link quando informado.' },
    target: { control: 'text', description: 'Target do link.' },
    disabled: { control: 'boolean', description: 'Desabilita o clique no modo botao.' }
  }
};

export default meta;

type Story = StoryObj<VcCardButtonComponent>;

export const Default: Story = {};

export const WithBadgeText: Story = {
  args: {
    icon: '',
    badgeText: 'CP'
  }
};

export const WithoutIcon: Story = {
  args: {
    showIcon: false
  }
};

export const AsLink: Story = {
  args: {
    href: '#'
  }
};
