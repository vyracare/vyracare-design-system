import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, signal, ViewChild } from '@angular/core';

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
  readonly coordinates = signal({ left: 0, top: 0 });

  @ViewChild('trigger', { static: true }) private trigger?: ElementRef<HTMLElement>;

  /** Displays the tooltip when meaningful text is available. */
  show(): void {
    if (this.text.trim()) {
      this.updateCoordinates();
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

  /** Removes the floating surface while the viewport moves to avoid stale coordinates. */
  @HostListener('window:resize')
  @HostListener('window:scroll')
  handleViewportChange(): void {
    this.hide();
  }

  /** Positions the fixed surface around the trigger without changing ancestor overflow. */
  private updateCoordinates(): void {
    const bounds = this.trigger?.nativeElement.getBoundingClientRect();
    if (!bounds) {
      return;
    }

    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const gap = 10;

    switch (this.position) {
      case 'bottom':
        this.coordinates.set({ left: centerX, top: bounds.bottom + gap });
        break;
      case 'left':
        this.coordinates.set({ left: bounds.left - gap, top: centerY });
        break;
      case 'right':
        this.coordinates.set({ left: bounds.right + gap, top: centerY });
        break;
      default:
        this.coordinates.set({ left: centerX, top: bounds.top - gap });
    }
  }
}
