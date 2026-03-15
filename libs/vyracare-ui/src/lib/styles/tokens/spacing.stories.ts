import type { Meta, StoryObj } from '@storybook/angular';

const spaces = [
  { token: '--vc-space-xs', label: 'XS', value: '4px' },
  { token: '--vc-space-sm', label: 'SM', value: '8px' },
  { token: '--vc-space-md', label: 'MD', value: '12px' },
  { token: '--vc-space-lg', label: 'LG', value: '16px' },
  { token: '--vc-space-xl', label: 'XL', value: '24px' },
  { token: '--vc-space-2xl', label: '2XL', value: '32px' },
  { token: '--vc-space-3xl', label: '3XL', value: '40px' }
];

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  tags: ['autodocs'],
  render: () => ({
    props: {
      spaces
    },
    template: `
      <section class="foundation-page">
        <div class="foundation-section">
          <h2>Escala</h2>
          <div class="foundation-grid">
            @for (space of spaces; track space.token) {
              <article class="foundation-card">
                <span class="foundation-token">{{ space.token }}</span>
                <div class="spacing-ruler">
                  <span class="spacing-ruler__bar" [style.width]="'var(' + space.token + ')'"></span>
                </div>
                <span>{{ space.label }} / {{ space.value }}</span>
              </article>
            }
          </div>
        </div>

        <div class="foundation-section">
          <h2>Aplicacao</h2>
          <div class="foundation-list">
            @for (space of spaces; track space.token) {
              <article class="foundation-card">
                <span class="foundation-token">{{ space.token }}</span>
                <div class="spacing-stack" [style.gap]="'var(' + space.token + ')'">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </article>
            }
          </div>
        </div>
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
      .foundation-grid,
      .foundation-list {
        display: grid;
        gap: 1rem;
      }
      .foundation-grid {
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
      .spacing-ruler {
        height: 16px;
        display: flex;
        align-items: center;
      }
      .spacing-ruler__bar {
        display: inline-flex;
        height: 10px;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--vc-color-primary), var(--vc-color-accent));
      }
      .spacing-stack {
        display: flex;
        align-items: center;
      }
      .spacing-stack span {
        width: 18px;
        height: 18px;
        border-radius: 6px;
        background: var(--vc-color-highlight-cool);
        border: 1px solid var(--vc-color-stroke);
      }
      `
    ]
  })
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
