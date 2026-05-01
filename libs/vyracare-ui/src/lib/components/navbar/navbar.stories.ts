import type { Meta, StoryObj } from '@storybook/angular';

import { VcNavbarComponent } from './navbar.component';

const meta: Meta<VcNavbarComponent> = {
  title: 'Components/Navbar',
  component: VcNavbarComponent,
  tags: ['autodocs'],
  args: {
    notifications: [
      {
        id: 'agenda',
        title: 'Agenda de hoje',
        description: 'Voce possui 8 atendimentos confirmados.'
      },
      {
        id: 'financeiro',
        title: 'Financeiro',
        description: '3 boletos aguardando confirmacao.'
      },
      {
        id: 'suporte',
        title: 'Suporte',
        description: 'Novo chamado respondido por nossa equipe.'
      }
    ],
    profileName: 'Lenin Silva',
    profileRole: 'Administrador',
    profileInitials: 'LS'
  }
};

export default meta;

type Story = StoryObj<VcNavbarComponent>;

export const Default: Story = {};
