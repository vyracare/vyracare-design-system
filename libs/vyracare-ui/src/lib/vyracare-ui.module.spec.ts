import { TestBed } from '@angular/core/testing';

import { VyracareUiModule } from './vyracare-ui.module';

describe('VyracareUiModule', () => {
  it('can be imported by Angular TestBed', async () => {
    await TestBed.configureTestingModule({
      imports: [VyracareUiModule]
    }).compileComponents();

    expect(VyracareUiModule).toBeTruthy();
  });
});
