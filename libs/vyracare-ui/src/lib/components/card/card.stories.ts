import type { Meta, StoryObj } from '@storybook/angular';

import { VcCardComponent } from './card.component';

const meta: Meta<VcCardComponent> = {
  title: 'Components/Card',
  component: VcCardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Card de conteudo com titulo e subtitulo opcionais.\n\n' +
          'Uso:\n' +
          '`<vc-card title="Ficha" subtitle="Primeiro atendimento">...</vc-card>`'
      }
    }
  },
  args: {
    title: 'Ficha inicial',
    subtitle: 'Primeiro atendimento',
    variant: 'default'
  },
  render: (args) => ({
    props: args,
    template: `
      <vc-card [title]="title" [subtitle]="subtitle" [variant]="variant">
        <p>Resumo da ficha: alergias, tratamentos anteriores e objetivos.</p>
      </vc-card>
    `
  }),
  argTypes: {
    title: {
      control: 'text',
      description: 'Titulo principal do card.'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitulo opcional do card.'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Variante visual do card.'
    }
  }
};

export default meta;

type Story = StoryObj<VcCardComponent>;

export const Default: Story = {
  args: {
    variant: 'default'
  }
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Card em destaque',
    subtitle: 'Nova campanha'
  }
};
