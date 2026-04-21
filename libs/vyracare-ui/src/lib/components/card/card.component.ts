import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { VcCardVariant } from './model/card.model';

export type { VcCardVariant } from './model/card.model';

/** Container component used to group related content and metrics. */
@Component({
  selector: 'vc-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcCardComponent {
  /** Optional heading rendered in the card header. */
  @Input() title = '';
  /** Optional eyebrow/subtitle rendered above the title. */
  @Input() subtitle = '';
  /** Visual variant used to change emphasis. */
  @Input() variant: VcCardVariant = 'default';
}
