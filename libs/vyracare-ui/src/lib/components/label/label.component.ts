import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/** Accessible label component with optional required indicator. */
@Component({
  selector: 'vc-label',
  standalone: true,
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcLabelComponent {
  /** Id of the form control associated with this label. */
  @Input() forId: string | null = null;
  /** Text rendered when no projected content is provided. */
  @Input() text = '';
  /** Shows the required indicator when true. */
  @Input() required = false;
}
