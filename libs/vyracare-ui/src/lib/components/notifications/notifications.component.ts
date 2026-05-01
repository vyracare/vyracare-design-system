import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';

import { VcIconButtonComponent } from '../icon-button/icon-button.component';
import type { VcNotificationItem } from './model/notifications.model';

export type { VcNotificationItem } from './model/notifications.model';

/** Bell trigger with dropdown content used for recent notifications in top navigation. */
@Component({
  selector: 'vc-notifications',
  standalone: true,
  imports: [VcIconButtonComponent],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcNotificationsComponent {
  /** Panel title displayed above the list. */
  @Input() title = 'Notificacoes recentes';
  /** Trigger icon label exposed to assistive technology. */
  @Input() triggerLabel = 'Abrir notificacoes';
  /** Text shown by the footer action button. */
  @Input() actionLabel = 'Ver todas';
  /** Collection of notifications rendered inside the dropdown. */
  @Input() items: VcNotificationItem[] = [];
  /** Optional badge count that overrides the number of rendered items. */
  @Input() count: number | null = null;

  /** Emits when the footer action is selected. */
  @Output() viewAll = new EventEmitter<void>();
  /** Emits when a notification row is selected. */
  @Output() itemSelected = new EventEmitter<VcNotificationItem>();

  /** Open state for the dropdown panel. */
  readonly open = signal(false);

  /** Badge count rendered in the trigger. */
  get badgeCount(): number {
    return this.count ?? this.items.length;
  }

  /** Toggles the panel visibility and prevents document click closing. */
  togglePanel(event: MouseEvent): void {
    event.stopPropagation();
    this.open.update((value) => !value);
  }

  /** Closes the panel when the user clicks outside the component. */
  @HostListener('document:click')
  closePanel(): void {
    this.open.set(false);
  }

  /** Emits the selected item and closes the panel. */
  selectItem(item: VcNotificationItem, event: MouseEvent): void {
    event.stopPropagation();
    this.itemSelected.emit(item);
    this.open.set(false);
  }

  /** Emits the footer action and closes the panel. */
  handleViewAll(event: MouseEvent): void {
    event.stopPropagation();
    this.viewAll.emit();
    this.open.set(false);
  }
}
