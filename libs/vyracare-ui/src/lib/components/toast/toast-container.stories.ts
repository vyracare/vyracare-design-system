import { Component } from '@angular/core';
import type { Meta, StoryObj } from '@storybook/angular';

import { VcButtonComponent } from '../button/button.component';
import { VcToastContainerComponent } from './toast-container.component';
import { VcToastService } from './toast.service';

@Component({
  selector: 'vc-toast-story',
  standalone: true,
  imports: [VcButtonComponent, VcToastContainerComponent],
  template: `
    <div style="display:flex; gap:12px; flex-wrap:wrap">
      <vc-button (click)="toast.success('Cadastro concluido', 'O paciente foi salvo com sucesso.')">Sucesso</vc-button>
      <vc-button variant="secondary" (click)="toast.error('Nao foi possivel salvar', 'Revise os dados e tente novamente.')">Erro</vc-button>
    </div>
    <vc-toast-container />
  `
})
class ToastStoryComponent {
  constructor(readonly toast: VcToastService) {}
}

const meta: Meta<ToastStoryComponent> = {
  title: 'Feedback/Toast global',
  component: ToastStoryComponent,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ToastStoryComponent>;

export const Default: Story = {};
