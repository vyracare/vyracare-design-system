import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { VcIconComponent } from '../icon/icon.component';

export type VcListItem = {
  title: string;
  description?: string;
  href?: string;
  target?: '_self' | '_blank';
  icon?: string;
};

@Component({
  selector: 'vc-list',
  standalone: true,
  imports: [CommonModule, VcIconComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcListComponent {
  @Input() items: VcListItem[] = [];
}
