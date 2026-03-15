import { NgModule } from '@angular/core';
import { VcButtonComponent } from './components/button/button.component';
import { VcCardComponent } from './components/card/card.component';
import { VcCardButtonComponent } from './components/card-button/card-button.component';
import { VcDateComponent } from './components/date/date.component';
import { VcSelectComponent } from './components/select/select.component';
import { VcHeadingComponent } from './components/heading/heading.component';
import { VcIconComponent } from './components/icon/icon.component';
import { VcInputComponent } from './components/input/input.component';
import { VcLabelComponent } from './components/label/label.component';
import { VcListComponent } from './components/list/list.component';
import { VcSearchComponent } from './components/search/search.component';
import { VcTextComponent } from './components/text/text.component';

@NgModule({
  imports: [
    VcButtonComponent,
    VcCardComponent,
    VcCardButtonComponent,
    VcDateComponent,
    VcSelectComponent,
    VcHeadingComponent,
    VcIconComponent,
    VcInputComponent,
    VcLabelComponent,
    VcListComponent,
    VcSearchComponent,
    VcTextComponent
  ],
  exports: [
    VcButtonComponent,
    VcCardComponent,
    VcCardButtonComponent,
    VcDateComponent,
    VcSelectComponent,
    VcHeadingComponent,
    VcIconComponent,
    VcInputComponent,
    VcLabelComponent,
    VcListComponent,
    VcSearchComponent,
    VcTextComponent
  ]
})
export class VyracareUiModule {}
