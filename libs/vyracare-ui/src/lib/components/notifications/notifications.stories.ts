import type { Meta, StoryObj } from '@storybook/angular';

import { VcNotificationsComponent } from './notifications.component';

const meta: Meta<VcNotificationsComponent> = {
  title: 'Components/Notifications',
  component: VcNotificationsComponent,
  tags: ['autodocs'],
  args: {
    items: [
      {
        id: 'agenda',
        title: 'Agenda de hoje',
        description: 'Voce possui 8 atendimentos confirmados.',
        time: 'Agora'
      },
      {
        id: 'financeiro',
        title: 'Financeiro',
        description: '3 boletos aguardando confirmacao.',
        time: '5 min'
      },
      {
        id: 'suporte',
        title: 'Suporte',
        description: 'Novo chamado respondido por nossa equipe.',
        time: '12 min'
      }
    ]
  }
};

export default meta;

type Story = StoryObj<VcNotificationsComponent>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    items: []
  }
};
