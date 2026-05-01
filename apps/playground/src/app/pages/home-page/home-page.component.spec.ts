import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HomePageComponent);
    fixture.detectChanges();
  });

  it('renders heading', () => {
    const heading = fixture.nativeElement.querySelector('.vc-heading');
    expect(heading).toBeTruthy();
  });

  it('navigates to the components and tokens pages', () => {
    const navigateSpy = jest.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    const component = fixture.componentInstance;

    component.navigateToComponents();
    component.navigateToTokens();

    expect(navigateSpy).toHaveBeenNthCalledWith(1, '/componentes');
    expect(navigateSpy).toHaveBeenNthCalledWith(2, '/tokens');
  });
});
