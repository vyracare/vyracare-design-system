import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import type { VcHeadingLevel } from './model/heading.model';

export type { VcHeadingLevel } from './model/heading.model';

/** Semantic heading component that keeps typography consistent. */
@Component({
  selector: 'vc-heading',
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcHeadingComponent {
  /** Semantic heading level rendered in the template. */
  @Input() level: VcHeadingLevel = 2;
}
