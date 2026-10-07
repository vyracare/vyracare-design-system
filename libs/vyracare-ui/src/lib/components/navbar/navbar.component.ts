import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, Output, signal } from '@angular/core';

import { VcAvatarComponent } from '../avatar/avatar.component';
import { VcIconButtonComponent } from '../icon-button/icon-button.component';
import { VcIconComponent } from '../icon/icon.component';
import { VcNotificationsComponent, type VcNotificationItem } from '../notifications/notifications.component';
import type { VcNavbarAction, VcNavbarSearchSuggestion } from './model/navbar.model';

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
  /** Navigation suggestions rendered below the search field. */
  @Input() searchSuggestions: VcNavbarSearchSuggestion[] = [];
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
  /** Emits the suggestion chosen by pointer or keyboard. */
  @Output() searchSuggestionSelected = new EventEmitter<VcNavbarSearchSuggestion>();
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
  /** Controls the visibility of the autocomplete panel. */
  readonly searchFocused = signal(false);
  /** Keyboard-highlighted suggestion index. */
  readonly activeSuggestionIndex = signal(-1);

  /** Whether the autocomplete has content and can be displayed. */
  get searchSuggestionsOpen(): boolean {
    return this.searchFocused() && this.searchSuggestions.length > 0;
  }

  /** Emits the search field value while keeping the component stateless. */
  handleSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchFocused.set(true);
    this.activeSuggestionIndex.set(-1);
    this.searchChange.emit(value);
  }

  /** Opens the autocomplete when the field receives focus. */
  openSearchSuggestions(): void {
    this.searchFocused.set(true);
  }

  /** Handles autocomplete navigation while preserving Enter as search submit. */
  handleSearchKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.searchFocused.set(false);
      this.activeSuggestionIndex.set(-1);
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (!this.searchSuggestions.length) {
        return;
      }

      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      const current = this.activeSuggestionIndex();
      const next = current < 0
        ? (direction > 0 ? 0 : this.searchSuggestions.length - 1)
        : (current + direction + this.searchSuggestions.length) % this.searchSuggestions.length;
      this.activeSuggestionIndex.set(next);
      return;
    }

    if (event.key !== 'Enter') {
      return;
    }

    const activeSuggestion = this.searchSuggestions[this.activeSuggestionIndex()];
    if (activeSuggestion) {
      event.preventDefault();
      this.selectSearchSuggestion(activeSuggestion);
      return;
    }

    this.searchFocused.set(false);
    this.searchSubmitted.emit((event.target as HTMLInputElement).value);
  }

  /** Emits a selected autocomplete destination and closes the panel. */
  selectSearchSuggestion(suggestion: VcNavbarSearchSuggestion): void {
    this.searchSuggestionSelected.emit(suggestion);
    this.searchFocused.set(false);
    this.activeSuggestionIndex.set(-1);
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
    this.searchFocused.set(false);
    this.activeSuggestionIndex.set(-1);
  }

  /** Emits the selected profile action and closes the dropdown. */
  selectProfileAction(action: VcNavbarAction, event: MouseEvent): void {
    event.stopPropagation();
    this.profileActionSelected.emit(action);
    this.profileMenuOpen.set(false);
  }
}
