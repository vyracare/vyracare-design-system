# Vyracare Design System (Angular)

Design System para os MFEs da Vyracare, com tokens + componentes Angular e Storybook.

## Estrutura do repositorio

- `apps/playground`: aplicacao de exemplo para uso e validacao dos componentes.
- `libs/vyracare-ui`: biblioteca com componentes, tokens, grid e Storybook.

## Scripts principais

- `npm run build` - build da lib (ng-packagr)
- `npm run test` - testes unitarios (Jest)
- `npm run storybook` - Storybook local
- `npm run storybook:build` - build estatico do Storybook

## Uso nos MFEs

1. Configure o feed do Azure Artifacts no `.npmrc` do projeto consumidor:

```
@vyracare:registry=https://pkgs.dev.azure.com/<ORG>/<PROJECT>/_packaging/<FEED>/npm/registry/
```

2. Instale o pacote:

```
npm i @vyracare/design-system
```

3. Importe o modulo no app:

```
import { VyracareUiModule } from '@vyracare/design-system';
```

## Publicacao

Este repositorio usa Changesets para versionamento e publicacao.

- `npm run changeset` para criar um changeset
- `npm run version` para aplicar versoes
- `npm run release` para publicar no feed

## Tokens

Os tokens ficam centralizados em `libs/vyracare-ui/src/lib/styles/tokens`, com as CSS variables geradas em `libs/vyracare-ui/src/lib/styles/_global.scss`.

## Componentes base

- `vc-label`
- `vc-input`
- `vc-heading`
- `vc-text`
- `vc-icon`

## Grid system

O grid segue o modelo de 12 colunas inspirado no Bootstrap.

Classes principais:

- `vc-container`
- `vc-container--fluid`
- `vc-row`
- `vc-col`
- `vc-col-1` ... `vc-col-12`
- `vc-col-sm-*`, `vc-col-md-*`, `vc-col-lg-*`, `vc-col-xl-*`

Exemplo rapido:

```
<div class="vc-container">
  <div class="vc-row">
    <div class="vc-col-6">...</div>
    <div class="vc-col-6">...</div>
  </div>
</div>
```

Para usar grid e tokens em projetos que compilam SCSS, importe:

```
@use '@vyracare/design-system/styles/_index.scss';
```

## Icones (Bootstrap Icons)

Este Design System utiliza apenas a parte de iconografia do Bootstrap via `bootstrap-icons`.

1) Instale (ja vem como dependencia do pacote):

```
npm i @vyracare/design-system
```

2) Importe o CSS dos icones no seu app:

```
@import 'bootstrap-icons/font/bootstrap-icons.css';
```

3) Use o componente:

```
<vc-icon name="alarm"></vc-icon>
<vc-icon name="calendar-event" size="lg"></vc-icon>
<vc-icon name="person" [size]="24"></vc-icon>
```

Use `decorative="false"` e `ariaLabel` quando o icone for sem texto:

```
<vc-icon name="bell" [decorative]="false" ariaLabel="Notificacoes"></vc-icon>
```
