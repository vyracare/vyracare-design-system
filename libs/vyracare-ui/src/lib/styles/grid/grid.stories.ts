import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundations/Grid',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Grid de 12 colunas inspirado no Bootstrap. Use `vc-container`, `vc-row` e `vc-col-*`.\n\n' +
          'Uso:\n' +
          '`<div class="vc-container"><div class="vc-row"><div class="vc-col-6">...</div></div></div>`'
      }
    }
  },
  render: () => ({
    template: `
      <div class="vc-container">
        <div class="vc-row">
          <div class="vc-col-12"><div class="grid-box">12</div></div>
          <div class="vc-col-6"><div class="grid-box">6</div></div>
          <div class="vc-col-6"><div class="grid-box">6</div></div>
          <div class="vc-col-4"><div class="grid-box">4</div></div>
          <div class="vc-col-4"><div class="grid-box">4</div></div>
          <div class="vc-col-4"><div class="grid-box">4</div></div>
          <div class="vc-col-3"><div class="grid-box">3</div></div>
          <div class="vc-col-3"><div class="grid-box">3</div></div>
          <div class="vc-col-3"><div class="grid-box">3</div></div>
          <div class="vc-col-3"><div class="grid-box">3</div></div>
        </div>
      </div>
    `,
    styles: [
      `
      .grid-box {
        background: #eef1ff;
        border: 1px dashed rgba(31, 79, 214, 0.4);
        padding: 12px;
        text-align: center;
        border-radius: 12px;
        margin-bottom: 12px;
        font-family: var(--vc-font-base);
      }
      `
    ]
  })
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
