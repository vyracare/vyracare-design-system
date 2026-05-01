import type { Meta, StoryObj } from '@storybook/angular';

import { VcIconButtonComponent } from './icon-button.component';

const meta: Meta<VcIconButtonComponent> = {
  title: 'Components/Icon Button',
  component: VcIconButtonComponent,
  tags: ['autodocs'],
  args: {
    icon: 'bell',
    ariaLabel: 'Abrir notificacoes'
  }
};

export default meta;

type Story = StoryObj<VcIconButtonComponent>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;align-items:center;gap:16px;">
        <vc-icon-button icon="search" ariaLabel="Buscar" variant="ghost"></vc-icon-button>
        <vc-icon-button icon="bell" ariaLabel="Notificacoes" variant="soft"></vc-icon-button>
        <vc-icon-button icon="box-arrow-right" ariaLabel="Sair" variant="solid"></vc-icon-button>
      </div>
    `
  })
};
