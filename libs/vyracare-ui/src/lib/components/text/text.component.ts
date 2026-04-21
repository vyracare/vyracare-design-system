import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { VcTextSize } from './model/text.model';

export type { VcTextSize } from './model/text.model';

/** Paragraph text component aligned with design-system typography tokens. */
@Component({
  selector: 'vc-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcTextComponent {
  /** Text size token. */
  @Input() size: VcTextSize = 'md';
  /** Applies muted visual treatment when true. */
  @Input() muted = false;
}
