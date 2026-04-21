import { Component, OnInit } from '@angular/core';

import { VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

/** Playground page that documents color tokens and computed CSS variable values. */
@Component({
  selector: 'playground-tokens-page',
  standalone: true,
  imports: [VcHeadingComponent, VcTextComponent],
  templateUrl: './tokens-page.component.html',
  styleUrls: ['./tokens-page.component.scss']
})
export class TokensPageComponent implements OnInit {
  /** Static color palettes shown as visual swatches. */
  palettes = [
    {
      title: 'Brand',
      colors: [
        { name: 'brand-primary', value: '#1f4fd6' },
        { name: 'brand-secondary', value: '#0b1f52' },
        { name: 'brand-accent', value: '#f5a524' }
      ]
    },
    {
      title: 'Semantic',
      colors: [
        { name: 'primary', value: '#5a3be7' },
        { name: 'accent', value: '#ff6c88' },
        { name: 'info', value: '#5ac4ff' },
        { name: 'background', value: '#f6f4ff' },
        { name: 'surface', value: '#ffffff' },
        { name: 'border', value: '#d6dbee' },
        { name: 'stroke', value: 'rgba(90, 59, 231, 0.12)' }
      ]
    },
    {
      title: 'Surface',
      colors: [
        { name: 'surface-default', value: '#ffffff' },
        { name: 'surface-muted', value: '#f6f4ff' },
        { name: 'border-default', value: '#d6dbee' },
        { name: 'border-strong', value: 'rgba(90, 59, 231, 0.12)' }
      ]
    },
    {
      title: 'Text',
      colors: [
        { name: 'text-primary', value: '#333b60' },
        { name: 'text-strong', value: '#1f2233' },
        { name: 'text-medium', value: '#223040' },
        { name: 'text-muted', value: '#6f7494' },
        { name: 'text-subtle', value: '#5a6174' },
        { name: 'text-support', value: '#8a8fb5' },
        { name: 'text-navigation', value: '#4a5276' }
      ]
    },
    {
      title: 'Highlight',
      colors: [
        { name: 'highlight', value: '#f4f1ff' },
        { name: 'highlight-strong', value: '#ebe5ff' },
        { name: 'highlight-warm', value: '#f8f4ff' },
        { name: 'highlight-cool', value: '#edf6ff' }
      ]
    },
    {
      title: 'Gradient',
      colors: [{ name: 'gradient-primary', value: '#6e4ef5' }]
    },
    {
      title: 'State',
      colors: [
        { name: 'state-danger', value: '#f3749a' },
        { name: 'state-danger-bg', value: '#ffecec' },
        { name: 'state-danger-text', value: '#b23547' },
        { name: 'state-success-bg', value: '#e8f7ef' },
        { name: 'state-success-text', value: '#2f7f5f' }
      ]
    },
    {
      title: 'Neutral',
      colors: [
        { name: 'neutral-900', value: '#0b0f1a' },
        { name: 'neutral-700', value: '#2c3551' },
        { name: 'neutral-100', value: '#eef1f8' }
      ]
    }
  ];

  /** CSS variable groups resolved from the active document styles. */
  groups = [
    {
      title: 'Semantic',
      tokens: [
        '--vc-color-primary',
        '--vc-color-accent',
        '--vc-color-info',
        '--vc-color-background',
        '--vc-color-surface',
        '--vc-color-border',
        '--vc-color-stroke',
        '--vc-color-gradient-primary'
      ]
    },
    {
      title: 'Text',
      tokens: [
        '--vc-color-text-primary',
        '--vc-color-text-strong',
        '--vc-color-text-medium',
        '--vc-color-text-muted',
        '--vc-color-text-subtle',
        '--vc-color-text-support',
        '--vc-color-text-navigation'
      ]
    },
    {
      title: 'Highlight',
      tokens: [
        '--vc-color-highlight',
        '--vc-color-highlight-strong',
        '--vc-color-highlight-warm',
        '--vc-color-highlight-cool'
      ]
    },
    {
      title: 'State',
      tokens: [
        '--vc-color-state-danger',
        '--vc-color-state-danger-bg',
        '--vc-color-state-danger-text',
        '--vc-color-state-success-bg',
        '--vc-color-state-success-text'
      ]
    },
    {
      title: 'Aliases',
      tokens: [
        '--vc-color-action-primary',
        '--vc-color-action-secondary',
        '--vc-color-action-info',
        '--vc-color-surface-default',
        '--vc-color-surface-muted',
        '--vc-color-border-default',
        '--vc-color-border-strong',
        '--vc-color-text-default',
        '--vc-color-text-weak',
        '--vc-color-highlight-default'
      ]
    }
  ];

  /** Runtime map with computed values for each documented CSS variable. */
  values = new Map<string, string>();

  /** Reads computed CSS variable values from the browser document. */
  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }
    const styles = getComputedStyle(document.documentElement);
    this.groups.forEach((group) => {
      group.tokens.forEach((token) => {
        const value = styles.getPropertyValue(token).trim();
        this.values.set(token, value || 'not set');
      });
    });
  }

}
