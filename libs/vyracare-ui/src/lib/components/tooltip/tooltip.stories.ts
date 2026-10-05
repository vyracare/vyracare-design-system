import type { Meta, StoryObj } from '@storybook/angular';

import { VcIconButtonComponent } from '../icon-button/icon-button.component';
import { VcTooltipComponent } from './tooltip.component';

const meta: Meta<VcTooltipComponent> = {
  title: 'Components/Tooltip',
  component: VcTooltipComponent,
  tags: ['autodocs'],
  args: { text: 'Editar paciente', position: 'top' }
};

export default meta;

type Story = StoryObj<VcTooltipComponent>;

export const Default: Story = {
  render: args => ({
    props: args,
    imports: [VcTooltipComponent, VcIconButtonComponent],
    template: `
      <div style="display:grid;place-items:center;min-height:180px">
        <vc-tooltip [text]="text" [position]="position">
          <vc-icon-button icon="pencil-square" ariaLabel="Editar paciente"></vc-icon-button>
        </vc-tooltip>
      </div>
    `
  })
};
