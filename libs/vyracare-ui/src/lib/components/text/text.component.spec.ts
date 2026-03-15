import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcTextComponent } from './text.component';

describe('VcTextComponent', () => {
  let fixture: ComponentFixture<VcTextComponent>;
  let component: VcTextComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VcTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VcTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('applies muted class', async () => {
    fixture.componentRef.setInput('muted', true);
    fixture.detectChanges();
    await fixture.whenStable();
    const paragraph = fixture.nativeElement.querySelector('p');
    expect(paragraph.classList.contains('vc-text--muted')).toBe(true);
  });
});
