import type { Meta, StoryObj } from '@storybook/angular';

import { VcSidebarComponent } from './sidebar.component';

const meta: Meta<VcSidebarComponent> = {
  title: 'Components/Sidebar',
  component: VcSidebarComponent,
  tags: ['autodocs'],
  args: {
    activeItemId: 'dashboard',
    groups: [
      {
        label: 'Area Clinica',
        items: [
          { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
          { id: 'agenda', label: 'Agenda', icon: 'calendar3' },
          { id: 'pacientes', label: 'Pacientes', icon: 'people' }
        ]
      },
      {
        label: 'Operacional',
        items: [
          { id: 'financeiro', label: 'Financeiro', icon: 'cash-stack' },
          { id: 'relatorios', label: 'Relatorios', icon: 'bar-chart' },
          { id: 'configuracoes', label: 'Configuracoes', icon: 'gear' }
        ]
      }
    ],
    support: {
      title: 'Precisa de ajuda?',
      description: 'Nossa equipe esta pronta para apoiar sua operacao.',
      linkLabel: 'suporte@vyracare.com',
      linkHref: 'mailto:suporte@vyracare.com'
    }
  }
};

export default meta;

type Story = StoryObj<VcSidebarComponent>;

export const Default: Story = {};
