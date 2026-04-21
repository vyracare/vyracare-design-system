import type { Meta, StoryObj } from '@storybook/angular';

import { VcIconComponent } from './icon.component';

const meta: Meta<VcIconComponent> = {
  title: 'Fundations/Icon',
  component: VcIconComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente de icone baseado em Bootstrap Icons. Passe o nome do icone sem o prefixo `bi-`.\n\n' +
          'Uso:\n' +
          '`<vc-icon name="alarm" size="lg"></vc-icon>`'
      }
    }
  },
  args: {
    name: 'alarm',
    size: 'md',
    decorative: true
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do icone (ex: alarm, calendar-event).'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 16, 20, 24, 32],
      description: 'Tamanho do icone (token ou valor em px).'
    },
    decorative: {
      control: 'boolean',
      description: 'Quando true, esconde o icone de leitores de tela.'
    },
    ariaLabel: {
      control: 'text',
      description: 'Descricao acessivel quando decorative = false.'
    },
    title: {
      control: 'text',
      description: 'Texto de tooltip (title).'
    }
  }
};

export default meta;

type Story = StoryObj<VcIconComponent>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display:flex; gap: 16px; align-items:center;">
        <vc-icon name="alarm" size="sm"></vc-icon>
        <vc-icon name="alarm" size="md"></vc-icon>
        <vc-icon name="alarm" size="lg"></vc-icon>
        <vc-icon name="alarm" size="xl"></vc-icon>
        <vc-icon name="alarm" [size]="32"></vc-icon>
      </div>
    `
  })
};

export const IconGallery: Story = {
  render: () => ({
    template: `
      <div class="icon-grid">
        <div class="icon-cell"><vc-icon name="alarm"></vc-icon><span>alarm</span></div>
        <div class="icon-cell"><vc-icon name="calendar-event"></vc-icon><span>calendar-event</span></div>
        <div class="icon-cell"><vc-icon name="bell"></vc-icon><span>bell</span></div>
        <div class="icon-cell"><vc-icon name="person"></vc-icon><span>person</span></div>
        <div class="icon-cell"><vc-icon name="clipboard-check"></vc-icon><span>clipboard-check</span></div>
        <div class="icon-cell"><vc-icon name="heart-pulse"></vc-icon><span>heart-pulse</span></div>
        <div class="icon-cell"><vc-icon name="briefcase"></vc-icon><span>briefcase</span></div>
        <div class="icon-cell"><vc-icon name="bar-chart"></vc-icon><span>bar-chart</span></div>
        <div class="icon-cell"><vc-icon name="people"></vc-icon><span>people</span></div>
        <div class="icon-cell"><vc-icon name="shield-check"></vc-icon><span>shield-check</span></div>
        <div class="icon-cell"><vc-icon name="geo-alt"></vc-icon><span>geo-alt</span></div>
        <div class="icon-cell"><vc-icon name="star"></vc-icon><span>star</span></div>
      </div>
    `,
    styles: [
      `
      .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 16px;
      }
      .icon-cell {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border: 1px dashed rgba(31, 79, 214, 0.3);
        border-radius: 12px;
        font-family: var(--vc-font-base);
        color: var(--vc-color-neutral-700);
      }
      .icon-cell span {
        font-size: 0.85rem;
      }
      `
    ]
  })
};
