import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vc-label',
  standalone: true,
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcLabelComponent {
  @Input() forId: string | null = null;
  @Input() text = '';
  @Input() required = false;
}
