import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { VcInputComponent } from '../input/input.component';
import type { VcInputMask, VcInputType } from '../input/model/input.model';

/** Telephone input with the Vyracare Brazilian phone mask. */
@Component({
  selector: 'vc-phone-input',
  standalone: true,
  templateUrl: '../input/input.component.html',
  styleUrls: ['../input/input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VcPhoneInputComponent), multi: true }]
})
export class VcPhoneInputComponent extends VcInputComponent {
  override type: VcInputType = 'tel';
  override mask: VcInputMask = 'phone';
  override placeholder = '(00) 00000-0000';

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}

/** Email input with lowercase and whitespace normalization. */
@Component({
  selector: 'vc-email-input',
  standalone: true,
  templateUrl: '../input/input.component.html',
  styleUrls: ['../input/input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VcEmailInputComponent), multi: true }]
})
export class VcEmailInputComponent extends VcInputComponent {
  override type: VcInputType = 'email';
  override mask: VcInputMask = 'email';
  override placeholder = 'nome@exemplo.com';

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}

/** Native date and time input with the shared Vyracare field layout. */
@Component({
  selector: 'vc-date-time-input',
  standalone: true,
  templateUrl: '../input/input.component.html',
  styleUrls: ['../input/input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VcDateTimeInputComponent), multi: true }]
})
export class VcDateTimeInputComponent extends VcInputComponent {
  override type: VcInputType = 'datetime-local';

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}

/** Postal code input with the Brazilian CEP mask. */
@Component({
  selector: 'vc-postal-code-input',
  standalone: true,
  templateUrl: '../input/input.component.html',
  styleUrls: ['../input/input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => VcPostalCodeInputComponent), multi: true }]
})
export class VcPostalCodeInputComponent extends VcInputComponent {
  override mask: VcInputMask = 'postalCode';
  override placeholder = '00000-000';

  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}
