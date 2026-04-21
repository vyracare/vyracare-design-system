import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { VcIconComponent } from '../icon/icon.component';
import type { VcListItem } from './model/list.model';

export type { VcListItem } from './model/list.model';

/** Vertical list for navigation rows, shortcuts and grouped options. */
@Component({
  selector: 'vc-list',
  standalone: true,
  imports: [CommonModule, VcIconComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcListComponent {
  /** Items rendered by the list. */
  @Input() items: VcListItem[] = [];
}
