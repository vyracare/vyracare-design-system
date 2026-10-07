import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { VcButtonComponent } from '../button/button.component';
import { VcHeadingComponent } from '../heading/heading.component';
import { VcTextComponent } from '../text/text.component';
import { VcModalComponent } from './modal.component';

const meta: Meta<VcModalComponent> = {
  title: 'Components/Modal',
  component: VcModalComponent,
  decorators: [moduleMetadata({ imports: [VcButtonComponent, VcHeadingComponent, VcTextComponent] })]
};

export default meta;
type Story = StoryObj<VcModalComponent>;

export const Confirmation: Story = {
  render: () => ({
    template: `
      <vc-modal role="alertdialog" labelledBy="example-title" describedBy="example-description">
        <vc-heading vcModalHeader id="example-title" [level]="2">Confirmar alterações</vc-heading>
        <div vcModalBody>
          <vc-text id="example-description">Deseja realmente salvar as alterações?</vc-text>
          <vc-text [muted]="true">Os dados atuais serão preservados até a confirmação.</vc-text>
        </div>
        <vc-button vcModalFooter variant="secondary">Cancelar</vc-button>
        <vc-button vcModalFooter>Confirmar e salvar</vc-button>
      </vc-modal>
    `
  })
};
