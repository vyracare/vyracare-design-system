import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

import type { VcAvatarSize, VcAvatarTone } from './model/avatar.model';

export type { VcAvatarSize, VcAvatarTone } from './model/avatar.model';

/** Circular avatar used for user identity in navigation and profile contexts. */
@Component({
  selector: 'vc-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VcAvatarComponent {
  /** Initials rendered when no image is available. */
  @Input() initials = '';
  /** Display name used for accessibility and fallback initials generation. */
  @Input() name = '';
  /** Optional image URL rendered inside the avatar. */
  @Input() imageUrl = '';
  /** Visual size token. */
  @Input() size: VcAvatarSize = 'md';
  /** Color treatment token. */
  @Input() tone: VcAvatarTone = 'brand';

  /** Host classes generated from avatar size and tone. */
  @HostBinding('class')
  get hostClasses(): string {
    return `vc-avatar vc-avatar--${this.size} vc-avatar--${this.tone}`;
  }

  /** Accessibility label exposed by the avatar container. */
  @HostBinding('attr.aria-label')
  get ariaLabel(): string {
    return this.name || this.fallbackInitials || 'Avatar';
  }

  /** Exposes the avatar as an image-like semantic element. */
  @HostBinding('attr.role') role = 'img';

  /** Whether the avatar should render an image. */
  get hasImage(): boolean {
    return this.imageUrl.trim().length > 0;
  }

  /** Fallback initials derived from explicit initials or display name. */
  get fallbackInitials(): string {
    const explicitInitials = this.initials.trim();

    if (explicitInitials) {
      return explicitInitials.toUpperCase();
    }

    const words = this.name
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    return words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }
}
