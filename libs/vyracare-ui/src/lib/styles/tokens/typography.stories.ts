import type { Meta, StoryObj } from '@storybook/angular';

const fontFamilies = [
  { token: '--vc-font-base', label: 'Base', value: 'var(--vc-font-base)' },
  { token: '--vc-font-heading', label: 'Heading', value: 'var(--vc-font-heading)' }
];

const scale = [
  { token: '--vc-font-size-3xl', label: 'Display', preview: '3XL / 34px' },
  { token: '--vc-font-size-2xl', label: 'Hero', preview: '2XL / 28px' },
  { token: '--vc-font-size-xl', label: 'Section', preview: 'XL / 22px' },
  { token: '--vc-font-size-lg', label: 'Lead', preview: 'LG / 18px' },
  { token: '--vc-font-size-md', label: 'Body', preview: 'MD / 16px' },
  { token: '--vc-font-size-sm', label: 'Support', preview: 'SM / 14px' },
  { token: '--vc-font-size-xs', label: 'Caption', preview: 'XS / 12px' }
];

const weights = [
  { token: '--vc-font-weight-regular', label: 'Regular', value: 400 },
  { token: '--vc-font-weight-medium', label: 'Medium', value: 500 },
  { token: '--vc-font-weight-semibold', label: 'Semibold', value: 600 },
  { token: '--vc-font-weight-bold', label: 'Bold', value: 700 }
];

const meta: Meta = {
  title: 'Design Tokens/Typography',
  tags: ['autodocs'],
  render: () => ({
    props: {
      fontFamilies,
      scale,
      weights
    },
    template: `
      <section class="foundation-page">
        <div class="foundation-section">
          <h2>Familias</h2>
          <div class="foundation-grid">
            @for (family of fontFamilies; track family.token) {
              <article class="foundation-card">
                <span class="foundation-token">{{ family.token }}</span>
                <div class="font-family-sample" [style.font-family]="family.value">{{ family.label }}</div>
                <span>{{ family.value }}</span>
              </article>
            }
          </div>
        </div>

        <div class="foundation-section">
          <h2>Escala</h2>
          <div class="foundation-list">
            @for (item of scale; track item.token) {
              <article class="foundation-card foundation-card--row">
                <div>
                  <span class="foundation-token">{{ item.token }}</span>
                  <div>{{ item.label }}</div>
                </div>
                <div class="font-scale-sample" [style.font-size]="'var(' + item.token + ')'">
                  {{ item.preview }}
                </div>
              </article>
            }
          </div>
        </div>

        <div class="foundation-section">
          <h2>Pesos</h2>
          <div class="foundation-grid">
            @for (weight of weights; track weight.token) {
              <article class="foundation-card">
                <span class="foundation-token">{{ weight.token }}</span>
                <div class="font-weight-sample" [style.font-weight]="'var(' + weight.token + ')'">{{ weight.label }}</div>
                <span>{{ weight.value }}</span>
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
      .foundation-card--row {
        display: grid;
        grid-template-columns: minmax(160px, 220px) 1fr;
        align-items: center;
      }
      .foundation-token {
        font-size: var(--vc-font-size-sm);
        color: var(--vc-color-text-muted);
      }
      .font-family-sample,
      .font-weight-sample {
        font-size: var(--vc-font-size-xl);
      }
      .font-scale-sample {
        font-family: var(--vc-font-heading);
        line-height: 1.15;
      }
      @media (max-width: 768px) {
        .foundation-card--row {
          grid-template-columns: 1fr;
        }
      }
      `
    ]
  })
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
