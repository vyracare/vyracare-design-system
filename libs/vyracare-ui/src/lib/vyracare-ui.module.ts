import { NgModule } from '@angular/core';
import { VcAvatarComponent } from './components/avatar/avatar.component';
import { VcButtonComponent } from './components/button/button.component';
import { VcCardComponent } from './components/card/card.component';
import { VcCardButtonComponent } from './components/card-button/card-button.component';
import { VcDateComponent } from './components/date/date.component';
import { VcSelectComponent } from './components/select/select.component';
import { VcHeadingComponent } from './components/heading/heading.component';
import { VcIconComponent } from './components/icon/icon.component';
import { VcIconButtonComponent } from './components/icon-button/icon-button.component';
import { VcInputComponent } from './components/input/input.component';
import { VcLabelComponent } from './components/label/label.component';
import { VcListComponent } from './components/list/list.component';
import { VcNavbarComponent } from './components/navbar/navbar.component';
import { VcNotificationsComponent } from './components/notifications/notifications.component';
import { VcSearchComponent } from './components/search/search.component';
import { VcSidebarComponent } from './components/sidebar/sidebar.component';
import { VcTextComponent } from './components/text/text.component';

@NgModule({
  imports: [
    VcAvatarComponent,
    VcButtonComponent,
    VcCardComponent,
    VcCardButtonComponent,
    VcDateComponent,
    VcSelectComponent,
    VcHeadingComponent,
    VcIconComponent,
    VcIconButtonComponent,
    VcInputComponent,
    VcLabelComponent,
    VcListComponent,
    VcNavbarComponent,
    VcNotificationsComponent,
    VcSearchComponent,
    VcSidebarComponent,
    VcTextComponent
  ],
  exports: [
    VcAvatarComponent,
    VcButtonComponent,
    VcCardComponent,
    VcCardButtonComponent,
    VcDateComponent,
    VcSelectComponent,
    VcHeadingComponent,
    VcIconComponent,
    VcIconButtonComponent,
    VcInputComponent,
    VcLabelComponent,
    VcListComponent,
    VcNavbarComponent,
    VcNotificationsComponent,
    VcSearchComponent,
    VcSidebarComponent,
    VcTextComponent
  ]
})
export class VyracareUiModule {}
