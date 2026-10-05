import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { VcToastService } from './toast.service';

describe('VcToastService', () => {
  let service: VcToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcToastService);
  });

  afterEach(() => service.clear());

  it('publishes and dismisses semantic feedback', () => {
    const id = service.success('Paciente salvo', 'Cadastro concluido', 0);

    expect(service.toasts()).toEqual([
      expect.objectContaining({ id, title: 'Paciente salvo', variant: 'success', duration: 0 })
    ]);

    service.dismiss(id);
    expect(service.toasts()).toEqual([]);
  });

  it('dismisses a toast automatically after its duration', fakeAsync(() => {
    service.error('Falha', undefined, 1000);
    expect(service.toasts()).toHaveLength(1);

    tick(1000);
    expect(service.toasts()).toHaveLength(0);
  }));

  it('supports warning, error and informational shortcuts and clears all messages', () => {
    service.warning('Atencao', 'Revise os dados', 0);
    service.error('Falha', 'Tente novamente', 0);
    service.info('Processando', undefined, 0);

    expect(service.toasts().map((toast) => toast.variant)).toEqual(['warning', 'error', 'info']);
    service.clear();
    expect(service.toasts()).toEqual([]);
  });

  it('updates local state when no browser window is available', () => {
    const serverService = new VcToastService({ defaultView: null } as unknown as Document);

    const id = serverService.show({ title: 'Renderizacao no servidor', duration: 0 });
    expect(serverService.toasts()[0]).toEqual(expect.objectContaining({ id, variant: 'info', duration: 0 }));

    serverService.dismiss(id);
    expect(serverService.toasts()).toEqual([]);
    serverService.ngOnDestroy();
  });
});
