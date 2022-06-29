import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteEnchereComponent } from './carte-enchere.component';

describe('CarteEnchereComponent', () => {
  let component: CarteEnchereComponent;
  let fixture: ComponentFixture<CarteEnchereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteEnchereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
