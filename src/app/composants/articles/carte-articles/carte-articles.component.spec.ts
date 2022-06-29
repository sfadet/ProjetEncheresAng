import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteArticlesComponent } from './carte-articles.component';

describe('CarteArticlesComponent', () => {
  let component: CarteArticlesComponent;
  let fixture: ComponentFixture<CarteArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
