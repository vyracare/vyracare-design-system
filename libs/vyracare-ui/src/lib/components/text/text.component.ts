import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vc-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcTextComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() muted = false;
}
