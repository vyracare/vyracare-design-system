import type { Meta, StoryObj } from '@storybook/angular';

import { VcSearchComponent } from './search.component';

const meta: Meta<VcSearchComponent> = {
  title: 'Form/Search',
  component: VcSearchComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Campo de busca com icone e suporte a hint/erro.\n\n' +
          'Uso:\n' +
          '`<vc-search placeholder="Buscar pacientes"></vc-search>`'
      }
    }
  },
  args: {
    placeholder: 'Buscar pacientes'
  }
};

export default meta;

type Story = StoryObj<VcSearchComponent>;

export const Default: Story = {};
