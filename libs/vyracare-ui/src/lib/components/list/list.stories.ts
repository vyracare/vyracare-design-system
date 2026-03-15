import type { Meta, StoryObj } from '@storybook/angular';

import { VcListComponent } from './list.component';

const meta: Meta<VcListComponent> = {
  title: 'Components/List',
  component: VcListComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Lista com itens informativos. Se `href` estiver presente, o item vira link.\n\n' +
          'Uso:\n' +
          '`<vc-list [items]="items"></vc-list>`'
      }
    }
  }
};

export default meta;

type Story = StoryObj<VcListComponent>;

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Cadastro de pacientes',
        description: 'Prontuarios e historico clinico',
        icon: 'people'
      },
      {
        title: 'Agenda',
        description: 'Proximos atendimentos',
        icon: 'calendar-check',
        href: '#'
      }
    ]
  }
};
