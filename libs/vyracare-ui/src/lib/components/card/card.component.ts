import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type VcCardVariant = 'default' | 'primary';

@Component({
  selector: 'vc-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() variant: VcCardVariant = 'default';
}
