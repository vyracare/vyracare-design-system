import type { Meta, StoryObj } from '@storybook/angular';

import { VcHeadingComponent } from './heading.component';

const meta: Meta<VcHeadingComponent> = {
  title: 'Fundations/Heading',
  component: VcHeadingComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Tipografia de titulos com niveis de 1 a 6.\n\n' +
          'Uso:\n' +
          '`<vc-heading [level]="2">Titulo</vc-heading>`'
      }
    }
  },
  args: {
    level: 2
  },
  render: (args) => ({
    props: args,
    template: '<vc-heading [level]="level">Titulo principal</vc-heading>'
  }),
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Nivel semantico do titulo.'
    }
  }
};

export default meta;

type Story = StoryObj<VcHeadingComponent>;

export const H1: Story = { args: { level: 1 } };
export const H2: Story = { args: { level: 2 } };
export const H3: Story = { args: { level: 3 } };
