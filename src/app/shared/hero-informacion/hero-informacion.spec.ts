import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInformacion } from './hero-informacion';

describe('HeroInformacion', () => {
  let component: HeroInformacion;
  let fixture: ComponentFixture<HeroInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroInformacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroInformacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
