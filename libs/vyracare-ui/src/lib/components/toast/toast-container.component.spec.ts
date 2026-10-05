import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcToastContainerComponent } from './toast-container.component';
import { VcToastService } from './toast.service';

describe('VcToastContainerComponent', () => {
  let fixture: ComponentFixture<VcToastContainerComponent>;
  let service: VcToastService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [VcToastContainerComponent] }).compileComponents();
    fixture = TestBed.createComponent(VcToastContainerComponent);
    service = TestBed.inject(VcToastService);
  });

  afterEach(() => service.clear());

  it('renders and closes a floating toast', () => {
    service.error('Nao foi possivel salvar', 'Tente novamente.', 0);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.vc-toast--error')).not.toBeNull();
    expect(fixture.nativeElement.textContent).toContain('Nao foi possivel salvar');
    expect(fixture.componentInstance.ariaLive('success')).toBe('polite');

    fixture.nativeElement.querySelector('.vc-toast__close').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.vc-toast')).toBeNull();
  });
});
