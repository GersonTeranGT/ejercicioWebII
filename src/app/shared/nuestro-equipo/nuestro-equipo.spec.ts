import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipo } from './nuestro-equipo';

describe('NuestroEquipo', () => {
  let component: NuestroEquipo;
  let fixture: ComponentFixture<NuestroEquipo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestroEquipo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestroEquipo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
