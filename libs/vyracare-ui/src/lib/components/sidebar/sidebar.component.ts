import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { VcIconComponent } from '../icon/icon.component';
import type { VcSidebarGroup, VcSidebarItem, VcSidebarSupport } from './model/sidebar.model';

export type { VcSidebarGroup, VcSidebarItem, VcSidebarSupport } from './model/sidebar.model';

/** Vertical navigation sidebar used to organize clinical and operational sections. */
@Component({
  selector: 'vc-sidebar',
  standalone: true,
  imports: [CommonModule, VcIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcSidebarComponent {
  /** Grouped navigation items rendered inside the sidebar. */
  @Input() groups: VcSidebarGroup[] = [];
  /** Active item identifier used to highlight the current section. */
  @Input() activeItemId = '';
  /** Optional support card rendered at the bottom of the sidebar. */
  @Input() support: VcSidebarSupport | null = null;

  /** Emits the selected item when the user activates a sidebar action. */
  @Output() itemSelected = new EventEmitter<VcSidebarItem>();

  /** Whether the item should be rendered as active. */
  isActive(item: VcSidebarItem): boolean {
    return item.id === this.activeItemId || !!item.active;
  }

  /** Emits the selected sidebar item. */
  selectItem(item: VcSidebarItem): void {
    this.itemSelected.emit(item);
  }
}
