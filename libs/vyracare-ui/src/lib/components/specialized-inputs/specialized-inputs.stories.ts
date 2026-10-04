import { Component } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';

import {
  VcDateTimeInputComponent,
  VcEmailInputComponent,
  VcPhoneInputComponent,
  VcPostalCodeInputComponent
} from './specialized-inputs.component';

@Component({
  selector: 'vc-specialized-inputs-story',
  standalone: true,
  imports: [VcDateTimeInputComponent, VcEmailInputComponent, VcPhoneInputComponent, VcPostalCodeInputComponent],
  template: `
    <div style="display: grid; gap: 1rem; max-width: 32rem;">
      <vc-phone-input id="story-phone" label="Telefone"></vc-phone-input>
      <vc-email-input id="story-email" label="E-mail"></vc-email-input>
      <vc-date-time-input id="story-date-time" label="Data e hora"></vc-date-time-input>
      <vc-postal-code-input id="story-postal-code" label="CEP"></vc-postal-code-input>
    </div>
  `
})
class SpecializedInputsStoryComponent {}

const meta: Meta<SpecializedInputsStoryComponent> = {
  title: 'Forms/Specialized Inputs',
  component: SpecializedInputsStoryComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Campos semanticos que centralizam tipo, mascara e placeholder para uso consistente nos MFEs.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<SpecializedInputsStoryComponent>;

export const Default: Story = {};
