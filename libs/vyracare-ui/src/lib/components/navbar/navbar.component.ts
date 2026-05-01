import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';

import { VcAvatarComponent } from '../avatar/avatar.component';
import { VcIconButtonComponent } from '../icon-button/icon-button.component';
import { VcIconComponent } from '../icon/icon.component';
import { VcNotificationsComponent, type VcNotificationItem } from '../notifications/notifications.component';
import type { VcNavbarAction } from './model/navbar.model';

export type { VcNavbarAction } from './model/navbar.model';

/** Top navigation shell composed of brand, search, notifications and user profile. */
@Component({
  selector: 'vc-navbar',
  standalone: true,
  imports: [CommonModule, VcAvatarComponent, VcIconButtonComponent, VcIconComponent, VcNotificationsComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcNavbarComponent {
  /** First portion of the brand lockup. */
  @Input() brandLabel = 'Vyra';
  /** Accent portion of the brand lockup. */
  @Input() brandAccent = 'Care';
  /** Supporting description rendered below the logo mark. */
  @Input() brandSubtitle = 'Gestao integrada para clinicas e profissionais de saude';
  /** Enables interaction on the logo area so it can be used as a home action. */
  @Input({ transform: booleanAttribute }) logoClickable = false;
  /** Accessibility label announced when the clickable logo is focused. */
  @Input() logoAriaLabel = 'Voltar para a pagina inicial';
  /** Placeholder rendered by the search input. */
  @Input() searchPlaceholder = 'Busque por pacientes, procedimentos ou arquivos';
  /** Current search field value. */
  @Input() searchValue = '';
  /** Notification items passed through to the notifications dropdown. */
  @Input() notifications: VcNotificationItem[] = [];
  /** Display name rendered beside the profile avatar. */
  @Input() profileName = 'Usuario Vyracare';
  /** Support role rendered below the profile name. */
  @Input() profileRole = 'Administrador';
  /** Initials forwarded to the avatar component. */
  @Input() profileInitials = 'VC';
  /** Optional image forwarded to the avatar component. */
  @Input() profileImageUrl = '';
  /** Profile actions rendered inside the dropdown. */
  @Input() profileActions: VcNavbarAction[] = [{ id: 'logout', label: 'Sair' }];

  /** Emits the current search value while the user types. */
  @Output() searchChange = new EventEmitter<string>();
  /** Emits the current search value when the user confirms the search. */
  @Output() searchSubmitted = new EventEmitter<string>();
  /** Emits when the logo area is selected. */
  @Output() logoClicked = new EventEmitter<void>();
  /** Emits when a notification item is selected. */
  @Output() notificationSelected = new EventEmitter<VcNotificationItem>();
  /** Emits when the notifications footer action is selected. */
  @Output() viewAllNotifications = new EventEmitter<void>();
  /** Emits when a profile action is selected. */
  @Output() profileActionSelected = new EventEmitter<VcNavbarAction>();

  /** Open state for the profile dropdown. */
  readonly profileMenuOpen = signal(false);

  /** Emits the search field value while keeping the component stateless. */
  handleSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  /** Emits the current search value when the user submits the field with Enter. */
  submitSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubmitted.emit(value);
  }

  /** Emits a home action when the clickable logo area is activated. */
  handleLogoClick(): void {
    if (!this.logoClickable) {
      return;
    }

    this.logoClicked.emit();
  }

  /** Toggles the profile dropdown and prevents document-level closing. */
  toggleProfileMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.profileMenuOpen.update((value) => !value);
  }

  /** Closes the profile dropdown when the user clicks outside the component. */
  @HostListener('document:click')
  closeMenus(): void {
    this.profileMenuOpen.set(false);
  }

  /** Emits the selected profile action and closes the dropdown. */
  selectProfileAction(action: VcNavbarAction, event: MouseEvent): void {
    event.stopPropagation();
    this.profileActionSelected.emit(action);
    this.profileMenuOpen.set(false);
  }
}
