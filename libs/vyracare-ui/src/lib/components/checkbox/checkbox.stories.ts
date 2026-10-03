import type { Meta, StoryObj } from '@storybook/angular';
import { VcCheckboxComponent } from './checkbox.component';
const meta: Meta<VcCheckboxComponent> = { title: 'Forms/Checkbox', component: VcCheckboxComponent, tags: ['autodocs'], args: { label: 'Consentimento', description: 'Confirmo a autorizacao para uso clinico.' } };
export default meta;
type Story = StoryObj<VcCheckboxComponent>;
export const Default: Story = {};
export const Invalid: Story = { args: { error: 'Confirme o consentimento.' } };
