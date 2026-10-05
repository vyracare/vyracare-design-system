import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { VcToastService } from './toast.service';

/** Floating viewport that renders feedback published by any application or MFE. */
@Component({
  selector: 'vc-toast-container',
  standalone: true,
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcToastContainerComponent {
  /** Shared state controller used to render and dismiss feedback. */
  readonly toastService = inject(VcToastService);
  /** Toast collection exposed by the global state service. */
  readonly toasts = this.toastService.toasts;

  /** Returns the live-region politeness appropriate for the toast variant. */
  ariaLive(variant: string): 'assertive' | 'polite' {
    return variant === 'error' ? 'assertive' : 'polite';
  }
}
