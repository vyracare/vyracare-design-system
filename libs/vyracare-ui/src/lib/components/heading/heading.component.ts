import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vc-heading',
  standalone: true,
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcHeadingComponent {
  @Input() level: 1 | 2 | 3 | 4 | 5 | 6 = 2;
}
