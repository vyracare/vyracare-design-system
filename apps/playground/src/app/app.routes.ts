import { Routes } from '@angular/router';

import { ButtonPageComponent } from './pages/components-page/page/button-page/button-page.component';
import { CardButtonPageComponent } from './pages/components-page/page/card-button-page/card-button-page.component';
import { CardPageComponent } from './pages/components-page/page/card-page/card-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { GridPageComponent } from './pages/grid-page/grid-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/components-page/page/list-page/list-page.component';
import { SpacingPageComponent } from './pages/spacing-page/spacing-page.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { TokensPageComponent } from './pages/tokens-page/tokens-page.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'componentes', component: ComponentsPageComponent },
  { path: 'componentes/button', component: ButtonPageComponent },
  { path: 'componentes/card-button', component: CardButtonPageComponent },
  { path: 'componentes/card', component: CardPageComponent },
  { path: 'componentes/list', component: ListPageComponent },
  { path: 'formularios', component: FormsPageComponent },
  { path: 'grid', component: GridPageComponent },
  { path: 'tokens', component: TokensPageComponent },
  { path: 'tipografia', component: TypographyPageComponent },
  { path: 'espacamento', component: SpacingPageComponent },
  { path: '**', redirectTo: '' }
];
