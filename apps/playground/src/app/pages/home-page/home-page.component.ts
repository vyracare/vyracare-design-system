import { Component } from '@angular/core';

import { VcButtonComponent, VcCardComponent, VcHeadingComponent, VcTextComponent } from '@vyracare/design-system';

@Component({
  selector: 'playground-home-page',
  standalone: true,
  imports: [VcButtonComponent, VcCardComponent, VcHeadingComponent, VcTextComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  /** Setup steps that explain how to consume the design-system package. */
  installSteps = [
    {
      title: 'Configure o registry',
      description: 'Aponte o npm para o CodeArtifact usado pelo pacote @vyracare/design-system.',
      command: 'aws codeartifact login --tool npm --domain vyracare-design-system --repository vyracare-design-system'
    },
    {
      title: 'Instale a biblioteca',
      description: 'Adicione o pacote no projeto consumidor usando npm install @vyracare/design-system.',
      command: 'npm install @vyracare/design-system'
    },
    {
      title: 'Importe estilos e componentes',
      description: 'Inclua o SCSS global do design system e use os componentes standalone nas telas.',
      command: "@import '@vyracare/design-system/styles';"
    }
  ];

  /** Design-system capability cards shown in the overview page. */
  pillars = [
    {
      title: 'Foundations',
      description: 'Tipografia, texto, icones e bases visuais para manter consistencia.'
    },
    {
      title: 'Components',
      description: 'Blocos reutilizaveis para criar experiencias clinicas com velocidade.'
    },
    {
      title: 'Design Tokens',
      description: 'Cores, espacamentos e variaveis globais centralizadas em CSS custom properties.'
    }
  ];
}
