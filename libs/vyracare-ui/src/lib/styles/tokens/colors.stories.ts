import type { Meta, StoryObj } from '@storybook/angular';

const palettes = [
  {
    title: 'Brand',
    colors: [
      { name: 'brand-primary', value: '#1f4fd6' },
      { name: 'brand-secondary', value: '#0b1f52' },
      { name: 'brand-accent', value: '#f5a524' }
    ]
  },
  {
    title: 'Neutral',
    colors: [
      { name: 'neutral-900', value: '#0b0f1a' },
      { name: 'neutral-800', value: '#1b2238' },
      { name: 'neutral-700', value: '#2c3551' },
      { name: 'neutral-600', value: '#4a5578' },
      { name: 'neutral-500', value: '#667199' },
      { name: 'neutral-400', value: '#8d97b6' },
      { name: 'neutral-300', value: '#b3bad0' },
      { name: 'neutral-200', value: '#d6dbea' },
      { name: 'neutral-100', value: '#eef1f8' }
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
    title: 'Text and Highlight',
    colors: [
      { name: 'text-primary', value: '#333b60' },
      { name: 'text-strong', value: '#1f2233' },
      { name: 'text-muted', value: '#6f7494' },
      { name: 'highlight', value: '#f4f1ff' },
      { name: 'highlight-strong', value: '#ebe5ff' },
      { name: 'highlight-cool', value: '#edf6ff' }
    ]
  },
  {
    title: 'Feedback',
    colors: [
      { name: 'success', value: '#2fb97f' },
      { name: 'warning', value: '#f5a524' },
      { name: 'danger', value: '#ea4f4f' },
      { name: 'state-danger-bg', value: '#ffecec' },
      { name: 'state-success-bg', value: '#e8f7ef' }
    ]
  }
];

const meta: Meta = {
  title: 'Design Tokens/Colors',
  tags: ['autodocs'],
  render: () => ({
    props: {
      palettes
    },
    template: `
      <section class="foundation-page">
        @for (palette of palettes; track palette.title) {
          <div class="foundation-section">
            <h2>{{ palette.title }}</h2>
            <div class="foundation-grid">
              @for (color of palette.colors; track color.name) {
                <article class="foundation-card">
                  <span class="color-swatch" [style.background]="color.value"></span>
                  <span class="foundation-token">{{ color.name }}</span>
                  <span>{{ color.value }}</span>
                </article>
              }
            </div>
          </div>
        }
      </section>
    `,
    styles: [
      `
      .foundation-page {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-family: var(--vc-font-base);
        color: var(--vc-color-text-strong);
      }
      .foundation-section {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }
      .foundation-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }
      .foundation-card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
        background: #ffffff;
        border-radius: 14px;
        box-shadow: 0 12px 25px rgba(15, 23, 42, 0.08);
      }
      .foundation-token {
        font-size: var(--vc-font-size-sm);
        color: var(--vc-color-text-muted);
      }
      .color-swatch {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        border: 1px solid rgba(0, 0, 0, 0.08);
      }
      `
    ]
  })
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
