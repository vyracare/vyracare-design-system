import { ChangeDetectionStrategy, Component, HostListener, Input, signal } from '@angular/core';

import type { VcTooltipPosition } from './model/tooltip.model';

export type { VcTooltipPosition } from './model/tooltip.model';

let nextTooltipId = 0;

/** Adds an accessible floating description to any projected interactive element. */
@Component({
  selector: 'vc-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcTooltipComponent {
  /** Text displayed inside the tooltip surface. */
  @Input() text = '';
  /** Preferred placement relative to the projected trigger. */
  @Input() position: VcTooltipPosition = 'top';

  readonly visible = signal(false);
  readonly tooltipId = `vc-tooltip-${++nextTooltipId}`;

  /** Displays the tooltip when meaningful text is available. */
  show(): void {
    if (this.text.trim()) {
      this.visible.set(true);
    }
  }

  /** Hides the tooltip surface. */
  hide(): void {
    this.visible.set(false);
  }

  /** Keeps keyboard users in control by dismissing the tooltip with Escape. */
  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.hide();
  }
}
