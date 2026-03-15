import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Introduction/Getting Started',
  parameters: {
    docs: {
      description: {
        component: 'Guia rapido de instalacao e uso do Vyracare Design System.'
      }
    }
  }
};

export default meta;

type Story = StoryObj;

const codeInstall = 'npm i @vyracare/design-system bootstrap-icons';
const codeStyles =
  '"styles": [\n  "node_modules/@vyracare/design-system/styles/_index.scss",\n  "node_modules/bootstrap-icons/font/bootstrap-icons.css",\n  "src/styles.scss"\n]';
const codeStandalone =
  "import { VcButtonComponent, VcInputComponent } from '@vyracare/design-system';\n\n@Component({\n  standalone: true,\n  imports: [VcButtonComponent, VcInputComponent],\n  template: `\n    <vc-input label=\"Email\" type=\"email\"></vc-input>\n    <vc-button>Salvar</vc-button>\n  `\n})\nexport class DemoComponent {}";
const codeModule =
  "import { VyracareUiModule } from '@vyracare/design-system';\n\n@NgModule({\n  imports: [VyracareUiModule]\n})\nexport class AppModule {}";
const codeIcon = '<vc-icon name="calendar-check" size="md"></vc-icon>';
const codeViewport =
  "Use a toolbar do Storybook e selecione um viewport como XS / 360px, MD / 768px ou XL / 1200px para validar responsividade.";

export const Overview: Story = {
  render: () => ({
    props: {
      codeInstall,
      codeStyles,
      codeStandalone,
      codeModule,
      codeIcon,
      codeViewport
    },
    template: `
      <section class="vc-intro">
        <h1>Vyracare Design System</h1>
        <p>
          Biblioteca de componentes Angular, tokens e utilitarios para padronizar
          a identidade visual dos produtos Vyracare.
        </p>

        <h2>1. Instalar o pacote</h2>
        <pre tabindex="0"><code [innerText]="codeInstall"></code></pre>

        <h2>2. Configurar estilos globais</h2>
        <p>Adicione os arquivos no <code>angular.json</code>:</p>
        <pre tabindex="0"><code [innerText]="codeStyles"></code></pre>

        <h2>3. Usar componentes (standalone)</h2>
        <pre tabindex="0"><code [innerText]="codeStandalone"></code></pre>

        <h2>4. Usar via module (NgModule)</h2>
        <pre tabindex="0"><code [innerText]="codeModule"></code></pre>

        <h2>5. Tokens</h2>
        <p>
          Tokens ficam disponiveis como CSS variables, por exemplo:
          <code>--vc-color-primary</code>, <code>--vc-font-size-md</code>.
        </p>

        <h2>6. Icones</h2>
        <p>Os icones seguem o Bootstrap Icons:</p>
        <pre tabindex="0"><code [innerText]="codeIcon"></code></pre>
        <p>Lista completa: https://icons.getbootstrap.com/</p>

        <h2>7. Check responsiveness with Viewports</h2>
        <p>
          Use a toolbar de viewport do Storybook para alternar entre os breakpoints
          do design system e validar comportamento responsivo.
        </p>
        <pre tabindex="0"><code [innerText]="codeViewport"></code></pre>
        <p>
          Foram configurados presets do Vyracare para <code>XS</code>, <code>SM</code>,
          <code>MD</code>, <code>LG</code> e <code>XL</code>, alem de dispositivos como
          <code>iPhone 14</code> e <code>iPad</code>.
        </p>
      </section>
      <style>
        .vc-intro {
          max-width: 760px;
          margin: 0 auto;
          padding: 2rem;
          font-family: var(--vc-font-base, 'Inter', system-ui, sans-serif);
          color: var(--vc-color-text-strong, #1f2233);
        }
        .vc-intro h1 {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          color: var(--vc-color-primary, #5a3be7);
        }
        .vc-intro h2 {
          margin-top: 1.75rem;
          font-size: 1.25rem;
        }
        .vc-intro p {
          line-height: 1.6;
        }
        .vc-intro pre {
          background: #0f172a;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 12px;
          overflow: auto;
          margin: 0.75rem 0 0;
        }
        .vc-intro code {
          font-family: 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
          font-size: 0.9rem;
        }
      </style>
    `
  })
};
